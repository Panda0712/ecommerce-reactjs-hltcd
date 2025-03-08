import { useOurShopContext } from "@context/useOurShopContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Button from "@components/Button/Button";
import ProductItem from "@components/ProductItem/ProductItem";
import classNames from "classnames";
import styles from "../styles.module.scss";

const ListProduct = () => {
  const { containerProduct, boxBtn, grid, list, rotate } = styles;

  const { viewStyle, products, loading, handleLoadMore, loadMore, total } =
    useOurShopContext();

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
        {products.length < total && (
          <Button
            loading={loadMore}
            onClick={handleLoadMore}
            content={
              loadMore ? (
                <AiOutlineLoading3Quarters className={rotate} />
              ) : (
                "LOAD MORE PRODUCT"
              )
            }
          />
        )}
      </div>
    </>
  );
};

export default ListProduct;
