import { create } from "zustand"

// const useAllConvo = create((set)=>({
//     myConversations:[],
//     setMyConversations: (myConversations) => set({myConversations}),
// }));

const useAllConvo = create((set) => ({
    myConversations: [], // ✅ must be array
    setMyConversations: (convos) => set({ myConversations: Array.isArray(convos) ? convos : [] }),
}));

export default useAllConvo;

