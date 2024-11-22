import { create } from "zustand";

interface StoreState {
  isContactFormOpen: boolean;
  toggleContactForm: () => void;
}

export const useStore = create<StoreState>((set) => ({
  // Controls the visibility of the contact form modal
  isContactFormOpen: false,
  toggleContactForm: () =>
    set((state) => ({ isContactFormOpen: !state.isContactFormOpen })),
}));
