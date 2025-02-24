/* eslint-disable react/prop-types */
import rldIcon from "@svg/rldIcon.svg";
import heartIcon from "@svg/heartIcon.svg";
import cartIcon from "@svg/cartIcon.svg";
import styles from "../styles.module.scss";

const Icon = ({ type, href, onClick }) => {
  const { boxIcon2 } = styles;

  const handleRenderIcon = (type) => {
    switch (type) {
      case "rld":
        return rldIcon;
      case "heart":
        return heartIcon;
      case "cart":
        return cartIcon;
      default:
        return rldIcon;
    }
  };

  return (
    <div className={boxIcon2} onClick={onClick}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
};

export default Icon;
