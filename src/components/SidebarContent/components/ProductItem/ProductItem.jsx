/* eslint-disable react/prop-types */
import { deleteProductCart } from "@/apis/cartService";
import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";
import { useToastContext } from "@/contexts/useToastContext";
import { useState } from "react";
import { useSidebarContext } from "@/contexts/useSidebarContext";
import Loading from "@components/Loading/Loading";

const ProductItem = ({ src, title, price, productId, userId }) => {
  const [isDelete, setIsDelete] = useState(false);

  const { container, name, priceStyle, icon, size, overlayLoading } = styles;

  const newTitle = title.length > 15 ? title.slice(0, 15) + "..." : title;

  const { toast } = useToastContext();
  const { handleGetCartProducts } = useSidebarContext();

  const handleRemoveItem = () => {
    setIsDelete(true);
    deleteProductCart(productId, userId)
      .then(() => {
        toast.success("Delete product successfully!!!");
        setIsDelete(false);
        handleGetCartProducts(userId);
      })
      .catch((err) => {
        toast.error("Failed to delete your product!!!");
        console.log(err);
        setIsDelete(false);
      });
  };

  return (
    <div className={container}>
      <img width={80} height={80} src={src} alt="" />
      <div>
        <div className={name}>{newTitle}</div>
        <div className={size}>Size: M</div>
        <div className={priceStyle}>${price}</div>
        <div className={priceStyle}>SKU: 122349</div>
      </div>

      <IoMdClose onClick={handleRemoveItem} className={icon} size={18} />

      {isDelete && (
        <div className={overlayLoading}>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default ProductItem;
