/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import styles from "./styles.module.scss";

const Input = ({ type, label, isRequired = false }) => {
  const [hide, setHide] = useState(false);

  const { container, labelInput, boxInput, boxIcon } = styles;

  const isPassword = type === "password";

  return (
    <div className={container}>
      <div>
        <div className={labelInput}>
          {label} {isRequired && <span>*</span>}
        </div>
        <div className={boxInput} onClick={() => setHide(!hide)}>
          <input type={!hide ? "text" : type} />
          {isPassword && (
            <div className={boxIcon}>{hide ? <FiEyeOff /> : <FiEye />}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
