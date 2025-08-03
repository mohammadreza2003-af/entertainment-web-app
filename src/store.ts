import { create } from "zustand";

type NavState = {
  activeLink: string;
  setActiveLink: (link: string) => void;
};

export const useNavStore = create<NavState>((set) => ({
  activeLink: "/",
  setActiveLink: (link) => set({ activeLink: link }),
}));
