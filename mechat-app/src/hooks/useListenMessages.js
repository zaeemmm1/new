
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation"; // ✅ use correct store
import { useEffect } from "react";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { setMessages } = useConversation(); // ✅ Zustand global state

    useEffect(() => {
        if (!socket) {
            return console.log("Socket not available");
        }

        socket.on("newMessage", (newMessage) => {
            setMessages((prev) => {
                const safePrev = Array.isArray(prev) ? prev : [];
                return [...safePrev, newMessage];
            });
        });


        return () => socket?.off("newMessage");
    }, [socket, setMessages]);
};

export default useListenMessages;
