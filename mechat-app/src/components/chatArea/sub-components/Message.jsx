
/* eslint-disable react/prop-types */

import { useAuthContext } from "../../../context/AuthContext";
import { extractTime } from "../../../utils/extractTime"

const Message = ({ message }) => {

  const { authUser } = useAuthContext();
  
  if (!authUser || !authUser.user) return null; 
  const fromMe = message.senderId === authUser.user.id;
  const formattedTime = extractTime(message.createdAt)



  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-[#005c4b]" : "bg-[#1e2123]";


  return (
    <>
      <div className={`chat  ${chatClassName} `}>
        <div className={`chat-bubble text-white w-auto max-w-96  ${bubbleBgColor}  `}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
      </div>
    </>
  )
}

export default Message;





