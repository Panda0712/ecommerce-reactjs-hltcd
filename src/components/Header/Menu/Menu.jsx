/* eslint-disable react/prop-types */
import styles from "../styles.module.scss";

const Menu = ({ content, href }) => {
  const { menuSlider } = styles;

  return <div className={menuSlider}>{content}</div>;
};

export default Menu;
