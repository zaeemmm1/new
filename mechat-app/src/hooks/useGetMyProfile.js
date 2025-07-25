import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import useProfile from "../zustand/useProfile";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { myProfile, setMyProfile } = useProfile();

    useEffect(() => {
        const fetchMyProfileData = async () => {
            setLoading(true);
            try {
                const res = await fetch("https://a1d328b2-25e3-4ac3-bb52-fbd8bc1bd0d6-00-2xxsyfgxc6ftk.sisko.replit.devapi/users/myProfile", { credentials: 'include' });
                const data = await res.json();

                if (res.ok) {
                    setMyProfile(data);
                } else {
                    toast.error(data.message || "Failed to load profile");
                }
            } catch (error) {
                console.error("Error fetching profile:", error.message);
                toast.error("Something went wrong. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        if (!myProfile) {
            fetchMyProfileData();
        }
    }, [myProfile, setMyProfile]);

    return { loading, myProfile };
};

export default useLogin;
