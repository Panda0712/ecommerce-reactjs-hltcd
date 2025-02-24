import { useSidebarContext } from "@/contexts/useSidebarContext";
import Cart from "@components/SidebarContent/Cart/Cart";
import Compare from "@components/SidebarContent/Compare/Compare";
import Heart from "@components/SidebarContent/Heart/Heart";
import Login from "@components/SidebarContent/Login/Login";
import classNames from "classnames";
import { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./styles.module.scss";

const Sidebar = () => {
  const { container, sidebarOpen, overlay, sidebar, boxIcon, active } = styles;

  const { isOpen, setIsOpen, type } = useSidebarContext();

  const handleRenderContent = () => {
    switch (type) {
      case "compare":
        return <Compare />;
      case "wishlist":
        return <Heart />;
      case "cart":
        return <Cart />;
      case "login":
        return <Login />;
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <div className={classNames(container, { [sidebarOpen]: isOpen })}>
      <div
        className={classNames({
          [overlay]: isOpen,
        })}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={classNames(sidebar, {
          [active]: isOpen,
        })}
      >
        {isOpen && (
          <div className={boxIcon} onClick={() => setIsOpen(false)}>
            <IoCloseOutline size={24} />
          </div>
        )}

        {isOpen && handleRenderContent()}
      </div>
    </div>
  );
};

export default Sidebar;
