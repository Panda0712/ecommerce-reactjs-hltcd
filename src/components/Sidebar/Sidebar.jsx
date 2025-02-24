import { useSidebarContext } from "@/contexts/useSidebarContext";
import classNames from "classnames";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./styles.module.scss";
import Login from "@components/SidebarContent/Login/Login";
import { useEffect } from "react";

const Sidebar = () => {
  const { container, sidebarOpen, overlay, sidebar, boxIcon, active } = styles;

  const { isOpen, setIsOpen } = useSidebarContext();

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

        <Login />
      </div>
    </div>
  );
};

export default Sidebar;
