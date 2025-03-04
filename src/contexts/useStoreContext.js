import { useContext } from "react";
import { StoreContext } from "@/contexts/StoreContext";

export const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (!context)
    throw new Error("StoreContext was used outside of the StoreProvider");

  return context;
};
