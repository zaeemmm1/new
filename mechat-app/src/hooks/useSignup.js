import { useState } from "react"
import toast from "react-hot-toast";
import { validatePassword } from "../utils/passwordRegx";
import { useAuthContext } from "../context/AuthContext";


export const useSignup = () => {

    const { setAuthUser } = useAuthContext();
    const [loading, setLoading] = useState(false)

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const normalizedUsername = username.toLowerCase();
        const isValid = handleInput({ fullName, username:normalizedUsername, password, confirmPassword, gender });
        if (!isValid) return;
        
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3000/api/auth/signUp', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
                credentials: 'include'
            });

            const data = await res.json()

            if (res.ok) {
                toast.success("SignUp Successfully");
                setAuthUser({ user: data.user })
            } else {
                toast.error(data.message || "SignUp failed!");
            }

        } catch (error) {
            console.log(error, error.message);
        } finally {
            setLoading(false)
        }
    }
    return { loading, signup };
}


const handleInput = ({ fullName, username, password, confirmPassword, gender }) => {

    if (!fullName || !username || !password || !confirmPassword) {
        toast.error("Please fill all the fields");
        return false;
    } else if (!gender) {
        toast.error("Please select gender");
        return false;
    }

    if (/\s/.test(username)) {
        toast.error("Username cannot contain spaces");
        return false;
    }
    
    const usernamePattern = /^[a-z0-9_-]+$/; 
    if (!usernamePattern.test(username)) {
        toast.error("Username can only contain special character");
        return false;
    }


    validatePassword(password);

    if (password !== confirmPassword) {
        toast.error("Confirm Password doesn't match");
        return false;
    }

    return true;
}
