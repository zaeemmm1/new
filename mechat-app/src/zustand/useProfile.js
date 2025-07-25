import { create } from "zustand";

const useProfile = create((set) => ({
    myProfile: null,
    setMyProfile: (myProfile) => set({ myProfile }),
}));

export default useProfile