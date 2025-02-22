/* eslint-disable react/prop-types */
import ProductItem from "@components/ProductItem/ProductItem";
import styles from "../styles.module.scss";

const PopularListProduct = ({ products }) => {
  const { containerPopular } = styles;

  return (
    <div className={containerPopular}>
      {products.length > 0 &&
        products
          .slice(2)
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
  );
};

export default PopularListProduct;
