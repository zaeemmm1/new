import { User } from "../../models/userModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user.id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log(error)
    }
}


export const getMyProfile = async (req, res) => {
    try {
        const loggedInUserId = req.user.id;
        const profile = await User.findOne({ _id: loggedInUserId }).select("-password")
        res.status(200).json( profile )
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}