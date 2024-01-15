import { create } from "zustand";

export const useInfo = create((set) => ({
  name: "",
  image: "",
  number: "",
  email: "",
  password: "",
  setName: (name) => set({ name }),
  setImage: (image) => set({ image }),
  setNumber: (number) => set({ number }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
}));
