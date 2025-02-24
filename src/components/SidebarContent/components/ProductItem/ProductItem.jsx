/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";

const ProductItem = ({ src, title, price }) => {
  const { container, name, priceStyle, icon } = styles;

  const newTitle = title.length > 15 ? title.slice(0, 15) + "..." : title;

  return (
    <div className={container}>
      <img width={80} height={80} src={src} alt="" />
      <div>
        <div className={name}>{newTitle}</div>
        <div className={priceStyle}>${price}</div>
      </div>

      <IoMdClose className={icon} size={18} />
    </div>
  );
};

export default ProductItem;
