/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");

  const handleToggle = () => setIsOpen(!isOpen);

  const handleType = (value) => setType(value);

  return (
    <SidebarContext.Provider
      value={{ isOpen, handleToggle, setIsOpen, type, handleType }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext };

export default SidebarProvider;
