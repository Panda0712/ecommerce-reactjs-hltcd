/* eslint-disable react/prop-types */
import classNames from "classnames";
import styles from "./styles.module.scss";

const Button = ({ content, type, full }) => {
  const { btn, btn2, shrink } = styles;

  return (
    <button
      className={
        type
          ? classNames(btn2, {
              [shrink]: full,
            })
          : classNames(btn, {
              [shrink]: full,
            })
      }
    >
      {content}
    </button>
  );
};

export default Button;
