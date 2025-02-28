/* eslint-disable react/prop-types */
import classNames from "classnames";
import styles from "./styles.module.scss";

const Button = ({ content, typeButton, full, ...props }) => {
  const { btn, btn2, shrink } = styles;

  return (
    <button
      className={
        typeButton
          ? classNames(btn2, {
              [shrink]: full,
            })
          : classNames(btn, {
              [shrink]: full,
            })
      }
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
