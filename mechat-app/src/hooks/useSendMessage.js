import toast from "react-hot-toast"
import { useState } from "react"
import useConversation from "../zustand/useConversation"
import useAllConvo from "../zustand/useAllConvo"

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const { myConversations, setMyConversations } = useAllConvo()

  const sendMessage = async (message) => {
    if (!message.trim()) {
      toast.error("Message cannot be empty!");
      return;
    }
    setLoading(true);
    const reciverId = selectedConversation._id;

    try {
      const res = await fetch(`https://a1d328b2-25e3-4ac3-bb52-fbd8bc1bd0d6-00-2xxsyfgxc6ftk.sisko.replit.dev/api/message/send/${reciverId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
        credentials: 'include'
      });

      if (!res.ok) {

        const errorText = await res.text();
        throw new Error(errorText || "Failed to send message");
      }

      const data = await res.json();
   
setMessages((prev) => [...(Array.isArray(prev) ? prev : []), data.message]);

setMyConversations((prevConvos) =>
  prevConvos.map((conversation) =>
    conversation.participants.some(
      (participant) => participant._id === selectedConversation._id
    )
      ? {
          ...conversation,
          messages: [...conversation.messages, data.message],
        }
      : conversation
  )
);


    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Error: " + (error.message || "Something went wrong"));
    } finally {
      setLoading(false);
    }
  }
  return { loading, sendMessage, messages, setMessages }

}

export default useSendMessage

