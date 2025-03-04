/* eslint-disable react/prop-types */
import classNames from "classnames";
import styles from "../styles.module.scss";

const SelectBox = ({ options, type, getValue }) => {
  const { selectBox, sort, show } = styles;

  return (
    <select
      onChange={(e) => getValue(e.target.value, type)}
      className={classNames(selectBox, {
        [sort]: type === sort,
        [show]: type === show,
      })}
      name={type}
      id={type}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
