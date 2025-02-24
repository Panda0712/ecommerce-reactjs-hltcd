import { useSidebarContext } from "@/contexts/useSidebarContext";
import useScrollHeader from "@/hooks/useScrollHeader";
import Logo from "@assets/images/Logo-retina.png";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { TfiReload } from "react-icons/tfi";
import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants";
import Menu from "./Menu/Menu";
import styles from "./styles.module.scss";

const Header = () => {
  const { isScroll } = useScrollHeader();

  const {
    container,
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerGlobal,
    fixedContainer,
    boxIcon2,
  } = styles;

  const { setIsOpen, handleType } = useSidebarContext();

  const handleChangeType = () => {
    setIsOpen(true);
    handleType("login");
  };

  return (
    <div className={isScroll ? fixedContainer : container}>
      <div className={containerHeader}>
        <div className={containerGlobal}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.slice(0, 3).map((icon) => (
              <BoxIcon key={icon.type} type={icon.type} href={icon.href} />
            ))}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => (
              <Menu
                key={item.content}
                content={item.content}
                href={item.href}
              />
            ))}
          </div>
        </div>

        <div>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "153px", height: "53px" }}
          />
        </div>

        <div className={containerGlobal}>
          <div className={containerMenu}>
            {dataMenu.slice(3, 6).map((item) => (
              <Menu
                key={item.content}
                content={item.content}
                href={item.href}
                onClick={item.content === "Sign In" ? handleChangeType : null}
              />
            ))}
          </div>
          <div className={containerBoxIcon}>
            <TfiReload
              className={boxIcon2}
              size={25}
              onClick={() => {
                setIsOpen(true);
                handleType("compare");
              }}
            />
            <CiHeart
              className={boxIcon2}
              size={26}
              onClick={() => {
                setIsOpen(true);
                handleType("wishlist");
              }}
            />
            <PiShoppingCartThin
              className={boxIcon2}
              onClick={() => {
                setIsOpen(true);
                handleType("cart");
              }}
              size={26}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
