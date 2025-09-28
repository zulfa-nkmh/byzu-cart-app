"use client";

import { create } from "zustand";

export const useToastStore = create((set) => ({
  toasts: [],
  addToast: (toast) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    const t = {
      id,
      title: toast.title ?? "",
      description: toast.description ?? "",
      type: toast.type ?? "default", // optional: 'success' | 'error' | 'default'
      duration: typeof toast.duration === "number" ? toast.duration : 3000,
    };

    set((s) => ({ toasts: [t, ...s.toasts] }));

    // auto remove after duration
    setTimeout(() => {
      set((s) => ({ toasts: s.toasts.filter((x) => x.id !== id) }));
    }, t.duration);
  },
  removeToast: (id) => set((s) => ({ toasts: s.toasts.filter((x) => x.id !== id) })),
}));

export default useToastStore;
