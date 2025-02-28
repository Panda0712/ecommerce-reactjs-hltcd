/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import styles from "./styles.module.scss";

const Input = ({ type, label, isRequired = false, ...props }) => {
  const [hide, setHide] = useState(false);

  const { container, labelInput, boxInput, boxIcon, errText } = styles;
  const { formik, id } = props;

  const isPassword = type === "password";

  return (
    <div className={container}>
      <div>
        <div className={labelInput}>
          {label} {isRequired && <span>*</span>}
        </div>
        <div className={boxInput} onClick={() => setHide(!hide)}>
          <input
            type={!hide ? "text" : type}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values[id]}
            {...props}
          />
          {isPassword && (
            <div className={boxIcon}>{hide ? <FiEyeOff /> : <FiEye />}</div>
          )}
        </div>

        {formik.touched[id] && formik.errors[id] && (
          <div className={errText}>{formik.errors[id]}</div>
        )}
      </div>
    </div>
  );
};

export default Input;
