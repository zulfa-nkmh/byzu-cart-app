"use client";

import useToastStore from "./toastStore";

export function useToast() {
  const addToast = useToastStore((s) => s.addToast);
  return { toast: addToast };
}

export default useToast;
