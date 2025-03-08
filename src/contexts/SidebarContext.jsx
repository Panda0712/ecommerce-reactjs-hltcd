/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getCart } from "@/apis/cartService";
import Cookies from "js-cookie";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const userId = Cookies.get("id");

  const handleToggle = () => setIsOpen(!isOpen);

  const handleType = (value) => setType(value);

  const handleGetCartProducts = (id) => {
    setLoading(true);
    getCart(id)
      .then((res) => {
        console.log(res);
        setCartProducts(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (userId) handleGetCartProducts(userId);
  }, [userId]);

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        handleToggle,
        setIsOpen,
        type,
        handleType,
        cartProducts,
        loading,
        handleGetCartProducts,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext };

export default SidebarProvider;
