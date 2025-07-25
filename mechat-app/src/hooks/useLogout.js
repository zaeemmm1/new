import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";


export const useLogout = () => {

     const { setAuthUser } = useAuthContext();
    const [loading, setLoading] = useState(false)

    const logout = async () => {

        setLoading(true);
        try {
            const res = await fetch('http://localhost:3000/api/auth/logout', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: 'include'
            });

            const data = await res.json()

            if (res.ok) {
                setAuthUser(null)
                toast.success("LoggedOut Successfully");
            } else {
                toast.error(data.message || "SignUp failed!");
            }

        } catch (error) {
            console.log(error , error.message);
        } finally {
            setLoading(false)
        }
    }
    return { loading, logout };
}

