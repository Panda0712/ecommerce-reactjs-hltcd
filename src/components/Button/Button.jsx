/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";

const Button = ({ content, type }) => {
  const { btn, btn2 } = styles;

  return <button className={type ? btn2 : btn}>{content}</button>;
};

export default Button;
