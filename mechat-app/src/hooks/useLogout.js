import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";


export const useLogout = () => {

     const { setAuthUser } = useAuthContext();
    const [loading, setLoading] = useState(false)

    const logout = async () => {

        setLoading(true);
        try {
            const res = await fetch('https://a1d328b2-25e3-4ac3-bb52-fbd8bc1bd0d6-00-2xxsyfgxc6ftk.sisko.replit.devapi/auth/logout', {
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

