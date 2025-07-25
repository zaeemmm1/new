
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { PiSticker } from "react-icons/pi";
import EmojiPicker from 'emoji-picker-react';
import { BsFillSendFill } from "react-icons/bs";
import useSendMessage from '../../../hooks/useSendMessage'


const MessageInput = () => {
  const { sendMessage } = useSendMessage();
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    sendMessage(message);
    setMessage("");
  }

  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji); 
    setShowEmojiPicker(false)
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#202c33] flex items-center justify-center  w-full py-3 px-4 gap-4 sm:gap-6 md:gap-8">

      <FaPlus className="text-xl text-white sm:text-2xl cursor-pointer" />

      <div className="bg-[#2a3942] flex items-center gap-1 px-4 py-3 rounded-xl w-full sm:w-3/4 md:w-2/3">
      <div className="relative">
        <PiSticker 
          className="text-green-300 text-2xl mr-2 sm:mr-3 cursor-pointer"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)} // Toggle emoji picker visibility
        />
        {showEmojiPicker && (
          <div className="absolute bottom-12 left-0 z-10">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
        <input
          type="text"
          placeholder="Type a message"
          className="w-full outline-none bg-transparent text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>


      <button >
        <BsFillSendFill
          className="text-2xl text-gray-500 hover:text-blue-500 active:scale-90 transition-transform duration-200 cursor-pointer" />
      </button>
    </form>
  );
};

export default MessageInput;
