/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";
import rldIcon from "@svg/rldIcon.svg";
import heartIcon from "@svg/heartIcon.svg";
import cartIcon from "@svg/cartIcon.svg";
import classNames from "classnames";
import Button from "@components/Button/Button";
import { useState } from "react";

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM77EJpIYu4W_Ft2ykv6KuykTWJfcC2WFcVw&s
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeJhdHAz5euqt29I-vocMDtD5SfiJMQWWbzw&s

const ProductItem = ({
  src,
  prevSrc,
  title,
  price,
  details,
  isHomepage = true,
  viewStyle,
}) => {
  const {
    container,
    row,
    boxImage,
    boxContent,
    boxSize,
    boxBtn,
    brand,
    active,
    showImageWhenHover,
    showAction,
    size,
    icon,
    titleStyle,
    priceStyle,
    textCenter,
    extra,
    clearText,
    homepage,
  } = styles;

  const [sizeChoose, setSizeChoose] = useState("");

  const handleChangeSize = (size) => setSizeChoose(size);

  const handleResetSize = () => setSizeChoose("");

  console.log(details);

  // const { viewStyle } = useOurShopContext();

  return (
    <div
      className={classNames(container, {
        [row]: viewStyle === "list",
        [homepage]: isHomepage,
      })}
    >
      <div
        className={classNames(boxImage, {
          [extra]: viewStyle === "list",
        })}
      >
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

      <div
        className={boxContent}
        style={{
          alignItems: viewStyle === "list" && "start",
        }}
      >
        {!isHomepage && (
          <div className={boxSize}>
            {details.size.map((item) => (
              <div
                onClick={() => handleChangeSize(item.name)}
                className={classNames(size, {
                  [active]: sizeChoose === item.name,
                })}
                key={item.name}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}

        {sizeChoose && (
          <div
            onClick={handleResetSize}
            className={classNames(clearText, {
              [textCenter]: viewStyle === "grid",
            })}
          >
            clear
          </div>
        )}

        <div
          className={classNames(titleStyle, {
            [textCenter]: !isHomepage,
          })}
        >
          {title}
        </div>
        {!isHomepage && (
          <div className={classNames(textCenter, brand)}>Brand 01</div>
        )}
        <div
          className={classNames(priceStyle, {
            [textCenter]: !isHomepage,
          })}
          style={{
            color: isHomepage ? "#333" : "#888",
          }}
        >
          ${price}
        </div>

        {!isHomepage && (
          <div className={boxBtn}>
            <Button content="ADD TO CART" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
