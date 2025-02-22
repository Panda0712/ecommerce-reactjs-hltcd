/* eslint-disable react/prop-types */
import Layout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import CountdownBanner from "@components/HeadingListProduct/components/CountdownBanner";
import ProductItem from "@components/ProductItem/ProductItem";
import PopularListProduct from "@components/HeadingListProduct/components/PopularListProduct";

const HeadingListProduct = ({ products }) => {
  const { container, containerCard } = styles;

  return (
    <Layout>
      <div className={container}>
        <CountdownBanner />
        <div className={containerCard}>
          {products.length > 0 &&
            products
              .slice(0, 2)
              .map((product) => (
                <ProductItem
                  key={product._id}
                  src={product.images[0]}
                  prevSrc={product.images[1]}
                  title={product.name}
                  price={product.price}
                />
              ))}
        </div>
      </div>
      <PopularListProduct products={products} />
    </Layout>
  );
};

export default HeadingListProduct;
