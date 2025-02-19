import Logo from "@assets/images/Logo-retina.png";
import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants";
import Icon from "./Icon/Icon";
import Menu from "./Menu/Menu";
import styles from "./styles.module.scss";

const Header = () => {
  const {
    container,
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerGlobal,
  } = styles;

  return (
    <div className={container}>
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
              <Icon key={icon.type} type={icon.type} href={icon.href} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
