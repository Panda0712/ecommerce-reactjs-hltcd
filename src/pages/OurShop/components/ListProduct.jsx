import { useOurShopContext } from "@context/useOurShopContext";
import styles from "../styles.module.scss";
import classNames from "classnames";
import ProductItem from "@components/ProductItem/ProductItem";
import Button from "@components/Button/Button";

const ListProduct = () => {
  const { containerProduct, boxBtn, grid, list } = styles;

  const { viewStyle, products, loading } = useOurShopContext();

  console.log(viewStyle);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <section
        className={classNames(containerProduct, {
          [grid]: viewStyle === "grid",
          [list]: viewStyle === "list",
        })}
      >
        {products.map((product) => (
          <ProductItem
            key={product.id}
            src={product.images[0]}
            prevSrc={product.images[1]}
            title={product.name}
            price={product.price}
            details={product}
            isHomepage={false}
            viewStyle={viewStyle}
          />
        ))}
      </section>
      <div className={boxBtn}>
        <Button content={loading ? "LOADING..." : "LOAD MORE PRODUCT"} />
      </div>
    </>
  );
};

export default ListProduct;
