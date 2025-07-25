// import { useState, useEffect } from "react";
// import useAllConvo from "../zustand/useAllConvo";
// import useProfile from "../zustand/useProfile";
// // import useLogin from "./useGetMyProfile";

// export const useGetConversations = () => {
//     // useLogin()
//     const [loading, setLoading] = useState(false);
//     const [progress, setProgress] = useState(null);
//     const { myConversations, setMyConversations } = useAllConvo();
//     const { myProfile, setMyProfile } = useProfile();

//     const getAllConvo = async () => {
//         try {
//             setLoading(true);
//             setProgress(0)
//             const [res1, res2] = await Promise.all([
//                 fetch("https://a1d328b2-25e3-4ac3-bb52-fbd8bc1bd0d6-00-2xxsyfgxc6ftk.sisko.replit.dev/api/message/getAllConvo", { credentials: "include" }),
//                 fetch("https://a1d328b2-25e3-4ac3-bb52-fbd8bc1bd0d6-00-2xxsyfgxc6ftk.sisko.replit.dev/api/users/myProfile", { credentials: "include" })
//             ]);

//             if (res1.ok && res2.ok) {
//                 const [data1, data2] = await Promise.all([res1.json(), res2.json()]);
//                 setMyConversations(data1);
//                 setMyProfile(data2);
//                 setProgress(100); 
                
//             } else {
//                 console.error("Failed to fetch conversations");
//             }
//         } catch (error) {
//             console.error("Error fetching conversations:", error.message);
//         } finally {
//             setTimeout(() => {
//                 setLoading(false);
//             }, 5000); 
//         }
//     };

//     useEffect(() => {
//         if (!myConversations || myConversations.length === 0) {
//             getAllConvo();
//         }
//     }, [myConversations]);

//     return { loading, myConversations,myProfile, progress,setProgress, getAllConvo };
// };



// // import { useState, useEffect } from "react";
// // import useAllConvo from "../zustand/useAllConvo";
// // import useLogin from "./useGetMyProfile";

// // export const useGetConversations = () => {
// //     const { loading: loginLoading, myProfile } = useLogin(); // Wait for profile to load
// //     const [loading, setLoading] = useState(false);
// //     const [progress, setProgress] = useState(null);
// //     const { myConversations, setMyConversations } = useAllConvo();

// //     const getAllConvo = async () => {
// //         try {
// //             setLoading(true);
// //             setProgress(0);
// //             const res = await fetch("/api/message/getAllConvo", { credentials: "include" });
// //             const data = await res.json();

// //             if (res.ok) {
// //                 setMyConversations(data);
// //                 setProgress(100);
// //             } else {
// //                 console.error("Failed to fetch conversations");
// //             }
// //         } catch (error) {
// //             console.error("Error fetching conversations:", error.message);
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     useEffect(() => {
// //         if (!loginLoading && myProfile && (!myConversations || myConversations.length === 0)) {
// //             getAllConvo();
// //         }
// //     }, [loginLoading, myProfile, myConversations]);

// //     return {
// //         loading: loading || loginLoading,
// //         myConversations,
// //         progress,
// //         setProgress,
// //         getAllConvo,
// //     };
// // };



import { useState, useEffect } from "react";
import useAllConvo from "../zustand/useAllConvo";
import useProfile from "../zustand/useProfile";

export const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { myConversations, setMyConversations } = useAllConvo();
  const { myProfile, setMyProfile } = useProfile();

  const getAllConvo = async () => {
    try {
      setLoading(true);
      setProgress(0);
      const [res1, res2] = await Promise.all([
        fetch("https://a1d328b2-25e3-4ac3-bb52-fbd8bc1bd0d6-00-2xxsyfgxc6ftk.sisko.replit.dev/api/message/getAllConvo", { credentials: "include" }),
        fetch("https://a1d328b2-25e3-4ac3-bb52-fbd8bc1bd0d6-00-2xxsyfgxc6ftk.sisko.replit.dev/api/users/myProfile", { credentials: "include" })
      ]);

      if (res1.ok && res2.ok) {
        const [data1, data2] = await Promise.all([res1.json(), res2.json()]);
        setMyConversations(data1); // even if empty
        setMyProfile(data2);
        setProgress(100);
      } else {
        console.error("Failed to fetch conversations");
      }
    } catch (error) {
      console.error("Error fetching conversations:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllConvo();
  }, []);

  return { loading, myConversations, myProfile, progress, setProgress, getAllConvo };
};
