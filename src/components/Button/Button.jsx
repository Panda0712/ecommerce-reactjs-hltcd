/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";

const Button = ({ content }) => {
  const { btn } = styles;

  return <button className={btn}>{content}</button>;
};

export default Button;
