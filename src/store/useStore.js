import { create } from "zustand";

export const useStore = create((set) => ({
  user: {
    name: "",
    username: "",
    email: "",
    mobile: "",
  },
  categories: [],
  notes: "",

  setUser: (data) => set({ user: data }),

  setCategories: (data) => set({ categories: data }),

  setNotes: (data) => set({ notes: data }),
}));