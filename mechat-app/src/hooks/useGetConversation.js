import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export const useGetConversation = () => {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        setLoading(true)
        const getConversation = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/users/allUsers", {credentials: 'include'});
                const data = await res.json()
                if (res.ok) {
                    setConversations(data)
                }
            } catch (error) {
                toast.error(error)
            } finally {
                setLoading(false)
            }
        }
        getConversation()
    }, [])

    return { loading, conversations }

}