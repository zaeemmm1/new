// import LogoutButton from "./LogoutButton";
import { IoSettingsOutline } from "react-icons/io5";
import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";
import { HiStatusOnline } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import {useGetConversations} from "../../../hooks/useGetConversations";


const ProfileBar = () => {
    const { loading ,myProfile } = useGetConversations();

    if (loading || !myProfile) {
                return <div className="spinner"></div>; 
            }

    return (
        <div className="flex flex-col justify-between h-full w-16">
            <div className="flex flex-col gap-5 mt-6 items-center text-3xl " >
                <div className="cursor-pointer">
                    <HiChatBubbleLeftEllipsis />
                </div >
                <div className="cursor-pointer">
                    <HiStatusOnline />
                </div>
                <div className="cursor-pointer">
                    <HiOutlineBadgeCheck />
                </div>
                <div className="cursor-pointer">
                    <HiOutlineUserGroup />
                </div>

            </div>
            <div className=" flex flex-col  gap-6 items-center ">
                <div className=" text-3xl cursor-pointer">
                <IoSettingsOutline />
                </div>
                <div className="mb-4 cursor-pointer ">
                    <div className='avatar '>
                        <div className='w-10 rounded-full '>
                            <img className="hover:bg-slate-700"
                                src={myProfile.profilePic}
                                alt='user avatar'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfileBar;
// import { IoSettingsOutline } from "react-icons/io5";
// import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";
// import { HiStatusOnline } from "react-icons/hi";
// import { HiOutlineUserGroup } from "react-icons/hi";
// import { HiOutlineBadgeCheck } from "react-icons/hi";
// import useLogin from "../../../hooks/useGetMyProfile";

// const ProfileBar = () => {
//     const { myProfile, loading } = useLogin();

//     if (loading || !myProfile) {
//         return <div>Loading...</div>; 
//     }

//     return (
//         <div className="flex flex-col justify-between h-full w-16">
//             <div className="flex flex-col gap-5 mt-6 items-center text-3xl">
//                 <div className="cursor-pointer">
//                     <HiChatBubbleLeftEllipsis />
//                 </div>
//                 <div className="cursor-pointer">
//                     <HiStatusOnline />
//                 </div>
//                 <div className="cursor-pointer">
//                     <HiOutlineBadgeCheck />
//                 </div>
//                 <div className="cursor-pointer">
//                     <HiOutlineUserGroup />
//                 </div>
//             </div>
//             <div className="flex flex-col gap-6 items-center">
//                 <div className="text-3xl cursor-pointer">
//                     <IoSettingsOutline />
//                 </div>
//                 <div className="mb-4 cursor-pointer">
//                     <div className="avatar">
//                         <div className="w-10 rounded-full">
//                             <img
//                                 className="hover:bg-slate-700"
//                                 src={myProfile.profilePic || "/default-avatar.png"} // Provide a default image
//                                 alt="user avatar"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProfileBar;
