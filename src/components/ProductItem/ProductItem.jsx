/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";
import rldIcon from "@svg/rldIcon.svg";
import heartIcon from "@svg/heartIcon.svg";
import cartIcon from "@svg/cartIcon.svg";

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM77EJpIYu4W_Ft2ykv6KuykTWJfcC2WFcVw&s
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeJhdHAz5euqt29I-vocMDtD5SfiJMQWWbzw&s

const ProductItem = ({ src, prevSrc, title, price }) => {
  const {
    boxImage,
    showImageWhenHover,
    showAction,
    icon,
    titleStyle,
    priceStyle,
  } = styles;

  return (
    <div>
      <div className={boxImage}>
        <img src={src} alt="" />
        <img className={showImageWhenHover} src={prevSrc} alt="" />

        <div className={showAction}>
          <div className={icon}>
            <img src={cartIcon} alt="" />
          </div>
          <div className={icon}>
            <img src={heartIcon} alt="" />
          </div>
          <div className={icon}>
            <img src={rldIcon} alt="" />
          </div>
          <div className={icon}>
            <img src={cartIcon} alt="" />
          </div>
        </div>
      </div>

      <div className={titleStyle}>{title}</div>
      <div className={priceStyle}>${price}</div>
    </div>
  );
};

export default ProductItem;
