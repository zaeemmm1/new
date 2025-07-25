import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import { User } from '../../models/userModel.js'
import { cookieAndtokenGenerator } from '../../utils/cookie&tokenGenerator.js';

export const createUser = async (req, res) => {
  const userData = req.body
  const existingCreds = await User.findOne({ username: userData.username });
  if (existingCreds) {
    return res.status(400).json({ message: 'Username already exists, please choose a different one.' });
  }

  if (userData.confirmPassword != userData.password) {
    return res.status(400).json({ message: "Confirm password doesm't match" });
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(userData.password, saltRounds);


  const boyProfilePic = `https://ui-avatars.com/api/?name=${userData.username}`;
  const girlProfilePic = `https://ui-avatars.com/api/?name=${userData.username}`;
  // const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userData.username}`;
  // const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userData.username}`;

  const newUser = new User({
    username: userData.username,
    fullName: userData.fullName,
    password: hashedPassword,
    gender: userData.gender,
    profilePic: userData.gender == "male" ? boyProfilePic : girlProfilePic
  });


  await newUser.save();
  cookieAndtokenGenerator(newUser.id, res);

  // const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: "15d" });
  // res.cookie("jwt", token, {
  //     maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
  //     httpOnly: true,
  //     sameSite: "strict"
  // });

  return res.status(201).json({
    message: "user created successfully",
    user: {
      _id: newUser.id,
      username: newUser.username,
      fullName: newUser.fullName,
      gender: newUser.gender,
      profilePic: newUser.profilePic || null
    }
  });

};


// export const loginUser = async (req, res) => {

//     const { username, password } = req.body;

//     const userExist = await User.findOne({ username });
//     if (!userExist) {
//         return res.status(401).json({ message: 'Invalid Credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, userExist.password);
//     if (!isMatch) {
//         return res.status(401).json({ message: 'Invalid Password' });
//     }

//     CTgen(userExist.id, res)

//     return res.status(200).json({
//         message: "login successfully", user: {
//             username: userExist.username,
//             fullName: userExist.fullName,
//             gender: userExist.gender,
//             profilePic: userExist.profilePic || null
//         }
//     });

// };

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    const userExist = await User.findOne({ username });
    if (!userExist) {
      return res.status(401).json({ message: 'Invalid Credentials...User doen\'t exist' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid Password' });
    }

    // Generate token and set it in the cookie
    try {
      cookieAndtokenGenerator(userExist.id, res);
    } catch (tokenError) {
      return res.status(500).json({ message: 'Token generation failed' });
    }


    return res.status(200).json({
      message: "Login successfully",
      user: {
        id: userExist.id,
        username: userExist.username,
        fullName: userExist.fullName,
        gender: userExist.gender,
        profilePic: userExist.profilePic || null
      }
    });

  } catch (error) {
    // Catch unexpected server errors
    console.error("Error during login:", error.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ "message": "logout Successfully" })
  } catch (error) {
    console.log(error, error.message)
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}


export const checkUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.status(200).json({ user: req.user });
  } catch (error) {
    console.log(error, error.message)
  }
};