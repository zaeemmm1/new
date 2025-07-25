
// import { create } from 'zustand'

// const useConversation = create((set) => ({
//     selectedConversation: null,
//     setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
//     messages: [],
//     setMessages: (messages) => set({ messages }),
// }));

// export default useConversation

// zustand/useConversation.js
import { create } from 'zustand';

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),

  messages: [],
  setMessages: (updater) =>
    set((state) => ({
      messages:
        typeof updater === 'function' ? updater(state.messages) : updater,
    })),
}));

export default useConversation;
