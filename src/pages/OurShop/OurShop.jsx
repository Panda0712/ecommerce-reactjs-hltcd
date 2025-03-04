import Header from "@components/Header/Header";
import Layout from "@components/Layout/Layout";
import classNames from "classnames";
import { useNavigate } from "react-router";
import styles from "./styles.module.scss";
import Banner from "@pages/OurShop/components/Banner";
import { useOurShopContext } from "@context/useOurShopContext";
import Filter from "@pages/OurShop/components/Filter";
import ListProduct from "@pages/OurShop/components/ListProduct";

const OurShop = () => {
  const {
    container,
    headingBox,
    navigationText,
    navigationChildText,
    btnBack,
  } = styles;

  const { showOptions, sortOptions } = useOurShopContext();

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Layout>
        <section className={container}>
          <div className={headingBox}>
            <div className={navigationText}>
              Home &gt; <span className={navigationChildText}>Shop</span>
            </div>
            <div
              onClick={() => navigate(-1)}
              className={classNames(navigationText, btnBack)}
            >
              &lt; Return to home page
            </div>
          </div>

          <Banner />
          <Filter />
          <ListProduct />
        </section>
      </Layout>
    </>
  );
};

export default OurShop;
