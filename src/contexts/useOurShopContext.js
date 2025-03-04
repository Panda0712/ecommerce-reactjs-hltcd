import { useContext } from "react";
import { OurShopContext } from "@context/OurShopContext";

export const useOurShopContext = () => {
  const context = useContext(OurShopContext);
  if (!context)
    throw new Error("OurShopContext was used outside of the OurShopProvider");

  return context;
};
