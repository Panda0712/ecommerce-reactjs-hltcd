/* eslint-disable react-hooks/exhaustive-deps */
import Button from "@components/Button/Button";
import ProductItem from "@components/SidebarContent/components/ProductItem/ProductItem";
import SidebarHeader from "@components/SidebarContent/components/SidebarHeader/SidebarHeader";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { PiShoppingCartLight } from "react-icons/pi";
import styles from "./styles.module.scss";
import { useSidebarContext } from "@/contexts/useSidebarContext";
import Loading from "@components/Loading/Loading";

const Cart = () => {
  const userId = Cookies.get("id");

  const { cartProducts, handleGetCartProducts, loading } = useSidebarContext();

  const {
    container,
    containerButton,
    containerLoading,
    containerCart,
    boxButton,
    boxHeading,
  } = styles;

  const totalPrice = cartProducts.reduce(
    (totalPrice, product) => totalPrice + product.price,
    0
  );

  useEffect(() => {
    if (userId) handleGetCartProducts(userId);
  }, [userId]);

  return (
    <div className={container}>
      <SidebarHeader icon={<PiShoppingCartLight size={30} />} title="CART" />
      <div className={containerCart}>
        {loading && (
          <div className={containerLoading}>
            <Loading />
          </div>
        )}
        {cartProducts.length > 0 &&
          !loading &&
          cartProducts.map((product) => (
            <ProductItem
              key={product.productId}
              src={product.images[0]}
              title={product.name}
              price={product.price}
              productId={product.productId}
              userId={userId}
            />
          ))}
      </div>

      <div className={containerButton}>
        <div className={boxHeading}>
          <p>SUBTOTAL</p>
          <p>${totalPrice}</p>
        </div>
        <div className={boxButton}>
          <Button content="VIEW CART" full />
          <Button content="CHECKOUT" full typeButton="second" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
