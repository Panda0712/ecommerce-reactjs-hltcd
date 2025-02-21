import Layout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import CountdownBanner from "@components/HeadingListProduct/components/CountdownBanner";

const HeadingListProduct = () => {
  const { container, containerCard } = styles;

  return (
    <Layout>
      <div className={container}>
        <CountdownBanner />
        <div className={containerCard}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </Layout>
  );
};

export default HeadingListProduct;
