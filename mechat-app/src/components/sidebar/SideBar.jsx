import { useState } from "react";
import SearchInput from "./sub-components/SearchInput";
import Conversations from "./sub-components/Conversations";
import ProfileBar from "./sub-components/ProfileBar";
import { HiMenu } from "react-icons/hi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useLogout } from "../../hooks/useLogout";
import { Link } from "react-router-dom";




const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useLogout();

  return (
    <>

      {!isOpen && (

        <button
          className="sm:hidden fixed top-4 left-3 z-50 bg-[#202c33] text-white p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiMenu className="text-2xl" />
        </button>
      )}


      {/* Sidebar */}

      <div className="bg-[#202c33] border-[#2f3b43] border-r-2">
        <ProfileBar />

      </div>



      <div
        className={`fixed sm:relative top-0 left-0  h-full   bg-[#111b21] border-r-2 border-[#1f2930] z-40 w-2/3 sm:w-1/3 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0 flex flex-col justify-between`}
      >
        {/* Header */}
        <div className="flex items-center p-4">
          <h1 className="font-medium text-2xl text-white">Chats</h1>
          <div className="ml-auto mt-2  text-white cursor-pointer text-xl">   <div className="dropdown dropdown-right">
            <div tabIndex={0} role="button" className="">
              <HiOutlineDotsVertical className="hover:text-gray-700 text-white text-xl" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>

                <Link onClick={logout}>Logout</Link>
              </li>
            </ul>
          </div>
          </div>
        </div>

        {/* Search Input */}
        <SearchInput />

        {/* Divider */}
        <div className="divider px-3"></div>

        {/* Conversations */}
        <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800" >
          <Conversations />
        </div>



      </div>

      {/* Backdrop for Small Screens */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SideBar;
