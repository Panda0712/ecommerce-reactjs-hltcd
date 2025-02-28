import SidebarHeader from "@components/SidebarContent/components/SidebarHeader/SidebarHeader";
import styles from "./styles.module.scss";
import { TfiReload } from "react-icons/tfi";
import ProductItem from "@components/SidebarContent/components/ProductItem/ProductItem";
import Button from "@components/Button/Button";

const Compare = () => {
  const { container, boxButton } = styles;

  return (
    <div className={container}>
      <SidebarHeader icon={<TfiReload size={30} />} title="Compare" />

      <ProductItem
        src="https://cdn1.epicgames.com/offer/879b0d8776ab46a59a129983ba78f0ce/genshintall_1200x1600-4a5697be3925e8cb1f59725a9830cafc"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ad
        distinctio sapiente assumenda, optio tempora, in nihil est consequatur,
        non accusantium expedita necessitatibus? Minima ipsa perspiciatis
        doloremque molestias quae pariatur?"
        price={59.99}
      />

      <div className={boxButton}>
        <Button content="VIEW COMPARE" full />
      </div>
    </div>
  );
};

export default Compare;
