import { getProducts } from "@/apis/productService";
import AdvancedHeading from "@components/AdvancedHeading/AdvancedHeading";
import Banner from "@components/Banner/Banner";
import Header from "@components/Header/Header";
import HeadingListProduct from "@components/HeadingListProduct/HeadingListProduct";
import Info from "@components/Info/Info";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import SalesHomePage from "@components/SalesHomePage/SalesHomePage";

const HomePage = () => {
  const [productsData, setProductsData] = useState([]);

  const { container } = styles;

  useEffect(() => {
    getProducts().then((data) => setProductsData(data.contents));
  }, []);

  return (
    <div className={container}>
      <Header />
      <Banner />
      <Info />
      <AdvancedHeading />
      <HeadingListProduct products={productsData} />
      <SalesHomePage />

      <div
        style={{
          height: "200rem",
        }}
      ></div>
    </div>
  );
};

export default HomePage;
