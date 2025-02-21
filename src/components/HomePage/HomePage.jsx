import Banner from "@components/Banner/Banner";
import Header from "@components/Header/Header";
import styles from "./styles.module.scss";
import AdvancedHeading from "@components/AdvancedHeading/AdvancedHeading";
import Info from "@components/Info/Info";
import HeadingListProduct from "@components/HeadingListProduct/HeadingListProduct";

const HomePage = () => {
  const { container } = styles;

  return (
    <div className={container}>
      <Header />
      <Banner />
      <Info />
      <AdvancedHeading />
      <HeadingListProduct />
    </div>
  );
};

export default HomePage;
