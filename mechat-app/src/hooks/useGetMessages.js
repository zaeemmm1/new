
import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import { useGetConversations } from "../hooks/useGetConversations"


const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const { myConversations } = useGetConversations(); 


    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            const userMessages = selectedConversation?._id;
            try {

                if (!myConversations || myConversations.length === 0) return;

                const conversation = myConversations.find(convo =>
                    convo.participants.some(participant => participant._id === userMessages)
                );
                setMessages(conversation.messages);
            } catch (error) {
                console.log("Error fetching messages:", error);
            } finally {
                setLoading(false);
            }
        };

        if (selectedConversation?._id) {
            getMessages(); 
        }
    }, [selectedConversation?._id, myConversations, setMessages]); 

    return { loading, messages };
};

export default useGetMessages;
