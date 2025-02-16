/* eslint-disable react/prop-types */
import styles from "../styles.module.scss";
import fbIcon from "@svg/fbIcon.svg";
import insIcon from "@svg/insIcon.svg";
import ytbIcon from "@svg/ytbIcon.svg";

const BoxIcon = ({ type, href }) => {
  const { boxIcon } = styles;

  const handleRenderIcon = (type) => {
    switch (type) {
      case "fb":
        return fbIcon;
      case "ins":
        return insIcon;
      case "ytb":
        return ytbIcon;
      default:
        return fbIcon;
    }
  };

  return (
    <div className={boxIcon}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
};

export default BoxIcon;
