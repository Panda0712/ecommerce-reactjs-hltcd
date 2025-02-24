import Logo from "@assets/images/Logo-retina.png";
import useScrollHeader from "@/hooks/useScrollHeader";
import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants";
import Icon from "./Icon/Icon";
import Menu from "./Menu/Menu";
import styles from "./styles.module.scss";
import { useSidebarContext } from "@/contexts/useSidebarContext";

const Header = () => {
  const { isScroll } = useScrollHeader();

  const {
    container,
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerGlobal,
    fixedContainer,
  } = styles;

  const { setIsOpen } = useSidebarContext();

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
              />
            ))}
          </div>
          <div className={containerBoxIcon}>
            {dataBoxIcon.slice(3, 6).map((icon) => (
              <Icon
                key={icon.type}
                type={icon.type}
                href={icon.href}
                onClick={() => setIsOpen(true)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
