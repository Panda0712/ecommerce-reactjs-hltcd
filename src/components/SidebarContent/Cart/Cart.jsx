import SidebarHeader from "@components/SidebarContent/components/SidebarHeader/SidebarHeader";
import styles from "./styles.module.scss";
import { PiShoppingCartLight } from "react-icons/pi";
import ProductItem from "@components/SidebarContent/components/ProductItem/ProductItem";
import Button from "@components/Button/Button";

const Cart = () => {
  const { container, containerButton, boxButton, boxHeading } = styles;

  return (
    <div className={container}>
      <SidebarHeader icon={<PiShoppingCartLight size={30} />} title="CART" />
      <ProductItem
        src="https://cdn1.epicgames.com/offer/879b0d8776ab46a59a129983ba78f0ce/genshintall_1200x1600-4a5697be3925e8cb1f59725a9830cafc"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ad
        distinctio sapiente assumenda, optio tempora, in nihil est consequatur,
        non accusantium expedita necessitatibus? Minima ipsa perspiciatis
        doloremque molestias quae pariatur?"
        price={59.99}
      />

      <div className={containerButton}>
        <div className={boxHeading}>
          <p>SUBTOTAL</p>
          <p>$199.99</p>
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
