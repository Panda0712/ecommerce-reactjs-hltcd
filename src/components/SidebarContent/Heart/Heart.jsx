import SidebarHeader from "@components/SidebarContent/components/SidebarHeader/SidebarHeader";
import styles from "./styles.module.scss";
import { CiHeart } from "react-icons/ci";
import Button from "@components/Button/Button";

const Heart = () => {
  const { container, boxButton } = styles;

  return (
    <div className={container}>
      <SidebarHeader icon={<CiHeart size={30} />} title="Wishlist" />

      <div className={boxButton}>
        <Button content="VIEW WISHLIST" full />
        <Button content="ADD ALL TO CART" full typeButton="secondary" />
      </div>
    </div>
  );
};

export default Heart;
