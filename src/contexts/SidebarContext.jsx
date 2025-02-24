/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <SidebarContext.Provider value={{ isOpen, handleToggle, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext };

export default SidebarProvider;
