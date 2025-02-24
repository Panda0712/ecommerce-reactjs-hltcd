/* eslint-disable react/prop-types */
import styles from "../styles.module.scss";

const Menu = ({ content, href, onClick }) => {
  const { menuSlider } = styles;

  return (
    <div className={menuSlider} onClick={onClick}>
      {content}
    </div>
  );
};

export default Menu;
