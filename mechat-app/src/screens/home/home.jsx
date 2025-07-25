// import { useEffect } from "react";
// import ChatArea from "../../components/chatArea/Chat"
// import SideBar from "../../components/sidebar/SideBar"
// import { useGetConversations } from "../../hooks/useGetConversations.js";
// // import { useLogout } from "../../hooks/useLogout.js";



// const Home = () => {
//   const { loading, getAllConvo } = useGetConversations();

//   useEffect(() => {
//       getAllConvo(); // Fetch conversations after login
//   }, []);


//   return (
//     <>
//       {loading ?
//         <div className="flex justify-center items-center h-[100svh] ">
//           <div className=" loading w-14 loading-spinner"></div>
//         </div> : <div className="flex h-[100svh]">
//           <SideBar />
//           <ChatArea />
//         </div>
//       }
//     </>
//   )
// }

// export default Home


// import { useEffect } from "react";
// import ChatArea from "../../components/chatArea/Chat"
// import SideBar from "../../components/sidebar/SideBar"
// import { useGetConversations } from "../../hooks/useGetConversations.js";
// import Loading from '../Loading/Loader.jsx'



// const Home = () => {
//   const { loading, getAllConvo } = useGetConversations();

//   useEffect(() => {
//     getAllConvo(); 
//   }, []);


//   return (
//     <>
//       {loading ?
//         <Loading /> : <div className="flex h-[100svh]">
//           <SideBar />
//           <ChatArea />
//         </div>
//       }
//     </>
//   )
// }

// export default Home


import { useEffect } from "react";
import ChatArea from "../../components/chatArea/Chat";
import SideBar from "../../components/sidebar/SideBar";
import { useGetConversations } from "../../hooks/useGetConversations.js";
import Loading from "../Loading/Loader.jsx";
import { useAuthContext } from "../../context/AuthContext.jsx";

const Home = () => {
  const { loading, getAllConvo } = useGetConversations();
  const { authUser } = useAuthContext();

  useEffect(() => {
    getAllConvo();
  }, []);

  if (!authUser) return <Loading />; // ⛔️ Guard before trying to render anything

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex h-[100svh]">
          <SideBar />
          <ChatArea />
        </div>
      )}
    </>
  );
};

export default Home;
