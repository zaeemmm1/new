
import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./sub-components/MessageInput"
import Messages from "./sub-components/Messages"
import { HiOutlineDotsVertical } from "react-icons/hi";
// import { TiMessages } from "react-icons/ti";
import { TbMessage } from "react-icons/tb";
import bgChatDark from "../../assets/images/bg-chat-dark.png";
import {useGetConversations} from "../../hooks/useGetConversations";



const Chat = () => {
    const {selectedConversation,setSelectedConversation}=  useConversation();
    useEffect(() => {
      return () => setSelectedConversation(null);
    }, [setSelectedConversation])
    



  return (
    <>

      <div className="flex flex-col w-full lg:w-2/3 border-r-2 border-[#1f2930] h-full bg-[#0d1418]"
  
       >
        {!selectedConversation ? <NoChatSelected /> : (
          <>
            <div className='bg-[#2a2f32] flex items-center  justify-around w-full  py-3 pl-[20px] md:px-6 md:gap-3 gap-2 ' >
              <div className='avatar '>
                <div className='w-12 rounded-full'>
                  <img
                    src={selectedConversation.profilePic}
                    alt='user avatar'
                  />
                </div>
              </div>
              <div className="flex flex-col ">
              <span className='text-white  font-bold'>{selectedConversation.fullName}</span>
              <span className='text-white  text-xs'>{selectedConversation.username}</span>

              </div>
              {/* <HiOutlineDotsVertical className=" md:ml-auto flex-1 pl-28  text-white cursor-pointer text-2xl  md:text-xl " /> */}
              <HiOutlineDotsVertical className="flex-1 pl-28 text-white cursor-pointer text-2xl md:ml-auto md:pl-0 md:flex-none md:text-xl" />


            </div>


            <div className=" flex-1 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800 "
             style={ {  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgChatDark})`,
             }}>
              <Messages />
            </div>
            <div>
              <MessageInput />
            </div>
          </>
        )}
      </div>
    </>

  )
}



export default Chat


// const NoChatSelected = () => {
//   const { myProfile } = useLogin();

  

//   return (
//     <div className='flex text-center items-center justify-center w-full h-full'>
//       <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
//       <h1>Hii.. <span className=" underline ">{myProfile.fullName}</span></h1>
//         <p>Select a chat to start messaging</p>
//         <TbMessage className='text-3xl md:text-6xl text-center' />
//       </div>
//     </div>
//   );
// };

const NoChatSelected = () => {
  const { myProfile } = useGetConversations();



  return (
    <div className='flex text-center items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <h1>
          Hii.. <span className="underline">{myProfile?.fullName}</span>
        </h1>
        <p>Select a chat to start messaging</p>
        <TbMessage className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
};
