import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export const useGetConversation = () => {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        setLoading(true)
        const getConversation = async () => {
            try {
                const res = await fetch("https://a1d328b2-25e3-4ac3-bb52-fbd8bc1bd0d6-00-2xxsyfgxc6ftk.sisko.replit.dev/api/users/allUsers", {credentials: 'include'});
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