/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react"
import { useAuthContext } from "./AuthContext.jsx"
import io from "socket.io-client"


export const SocketContext = createContext()


export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:3000/", {
                query: {
                    userId: authUser.user.id
                },
                credentials: 'include' 
            });
            setSocket(socket);
            
            socket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users);
            });
            socket.on('connect_error', (err) => {
                console.log('Socket error:', err.message);
            });

            return () => socket.close();

        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }

    }, [authUser])




    return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>
}
