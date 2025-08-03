import { create } from "zustand";

type NavState = {
  activeLink: string;
  setActiveLink: (link: string) => void;
};

type SearchStore = {
  search: string;
  setSearch: (value: string) => void;
};

export const useNavStore = create<NavState>((set) => ({
  activeLink: "/",
  setActiveLink: (link) => set({ activeLink: link }),
}));

export const useSearchStore = create<SearchStore>((set) => ({
  search: "",
  setSearch: (value) => set({ search: value }),
}));
