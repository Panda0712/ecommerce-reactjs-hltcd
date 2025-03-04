/* eslint-disable react/prop-types */
import { useStoreContext } from "@/contexts/useStoreContext";
import styles from "../styles.module.scss";
import { useState } from "react";

const Menu = ({ content, href, onClick }) => {
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

  const { menuSlider, menuContent, subMenu, hiddenLine } = styles;
  const { userInfo, handleLogout } = useStoreContext();

  const handleRenderText = (content) => {
    if (content === "Sign In" && userInfo) {
      return `Hello ${userInfo.username}`;
    }

    return content;
  };

  const handleHover = () => {
    if (content === "Sign In" && userInfo) {
      setIsShowSubMenu(true);
    }
  };

  return (
    <div
      className={menuSlider}
      onMouseEnter={handleHover}
      onMouseLeave={() => setIsShowSubMenu(false)}
      onClick={onClick}
    >
      {content !== "Sign In" ? (
        <a className={menuContent} href={href}>
          {handleRenderText(content)}
        </a>
      ) : (
        <div className={menuContent}>{handleRenderText(content)}</div>
      )}

      {content === "Sign In" && <div className={hiddenLine}></div>}

      {isShowSubMenu && content === "Sign In" && (
        <div className={subMenu} onClick={handleLogout}>
          LOG OUT
        </div>
      )}
    </div>
  );
};

export default Menu;
