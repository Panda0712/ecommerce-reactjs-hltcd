import { useContext } from "react";
import { ToastContext } from "@/contexts/ToastContext";

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context)
    throw new Error("ToastContext was used outside of the ToastProvider");

  return context;
};
