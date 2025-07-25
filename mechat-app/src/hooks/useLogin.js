import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async ({ username, password }) => {
        const verify = handleInput({ username, password });
        if (!verify) return;

        setLoading(true);
        try {
            const res = await fetch(
                "https://a1d328b2-25e3-4ac3-bb52-fbd8bc1bd0d6-00-2xxsyfgxc6ftk.sisko.replit.dev/api/auth/logIn",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password }),
                    credentials: "include",
                },
            );
            const data = await res.json();
            if (res.ok) {
                toast.success("LogIn Successfully");
                setAuthUser(data);
            } else {
                toast.error(data.message || "Login failed!");
            }
        } catch (error) {
            console.log(error, error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};

const handleInput = ({ username, password }) => {
    if (!username || !password) {
        toast.error("please fill all the fields");
        return false;
    }
    return true;
};
