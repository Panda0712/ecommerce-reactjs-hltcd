/* eslint-disable react/prop-types */
import { addProductToCart } from "@/apis/cartService";
import { useSidebarContext } from "@/contexts/useSidebarContext";
import { useToastContext } from "@/contexts/useToastContext";
import Button from "@components/Button/Button";
import Loading from "@components/Loading/Loading";
import cartIcon from "@svg/cartIcon.svg";
import heartIcon from "@svg/heartIcon.svg";
import rldIcon from "@svg/rldIcon.svg";
import classNames from "classnames";
import Cookies from "js-cookie";
import { useState } from "react";
import styles from "./styles.module.scss";

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
  const userId = Cookies.get("id");

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
  const [cartLoading, setCartLoading] = useState(false);

  const { handleType, setIsOpen } = useSidebarContext();

  const { toast } = useToastContext();

  const handleChangeSize = (size) => setSizeChoose(size);

  const handleResetSize = () => setSizeChoose("");

  const handleAddToCart = async () => {
    console.log(userId);
    if (!userId) {
      setIsOpen(true);
      handleType("login");
      toast.warning("Please login to add your product to your cart!");
      return;
    }

    if (!sizeChoose) {
      toast.warning("Please choose a size!");
      return;
    }

    const data = {
      userId,
      productId: details._id,
      quantity: 1,
      size: sizeChoose,
    };

    console.log(details);

    setCartLoading(true);
    addProductToCart(data)
      .then((res) => {
        setIsOpen(true);
        handleType("cart");
        toast.success("Added to cart successfully!");
        setCartLoading(false);
      })
      .catch((err) => {
        toast.error("Failed to add to cart! Error: ", err.message);
        console.log(err);
        setCartLoading(false);
      });
  };

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
            <Button
              onClick={handleAddToCart}
              content={cartLoading ? <Loading /> : "ADD TO CART"}
              loading={cartLoading}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
