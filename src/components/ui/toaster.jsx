"use client";

import useToastStore from "./toastStore";
import { X } from "lucide-react"; // kalau ga pakai lucide, ganti dengan '×' saja

export function Toaster() {
  const toasts = useToastStore((s) => s.toasts);
  const remove = useToastStore((s) => s.removeToast);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 p-2 max-w-full">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={
            "w-[360px] max-w-full p-3 rounded-lg shadow-md border flex items-start gap-3 " +
            (t.type === "error" ? "bg-red-50 border-red-200" : "bg-white border-gray-200")
          }
        >
          <div className="flex-1">
            {t.title && <div className="font-semibold text-sm">{t.title}</div>}
            {t.description && <div className="text-xs text-gray-600 mt-1 line-clamp-3">{t.description}</div>}
          </div>

          <button
            onClick={() => remove(t.id)}
            aria-label="close toast"
            className="ml-2 text-gray-500 hover:text-gray-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Toaster;
