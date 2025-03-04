import { useOurShopContext } from "@context/useOurShopContext";
import SelectBox from "@pages/OurShop/components/SelectBox";
import { CiCircleList } from "react-icons/ci";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import styles from "../styles.module.scss";

const Filter = () => {
  const { containerFilter, boxLeft, boxRight } = styles;

  const {
    sort,
    show,
    sortOptions,
    showOptions,
    handleChangeSort,
    handleChangeShow,
    handleChangeViewStyle,
  } = useOurShopContext();

  const getValue = (value, type) => {
    console.log(value);

    if (type === "sort") handleChangeSort(value);
    else handleChangeShow(value);
  };

  console.log("sort", sort);
  console.log("show", show);

  return (
    <section className={containerFilter}>
      <div className={boxLeft}>
        <SelectBox options={sortOptions} type="sort" getValue={getValue} />
        <TfiLayoutGrid4
          onClick={() => handleChangeViewStyle("grid")}
          style={{ cursor: "pointer" }}
          size={22}
        />
        <div
          style={{ width: "1px", height: "20px", backgroundColor: "#e1e1e1" }}
        />
        <CiCircleList
          onClick={() => handleChangeViewStyle("list")}
          style={{ cursor: "pointer" }}
          size={24}
        />
      </div>

      <div className={boxRight}>
        <div>Show</div>
        <SelectBox options={showOptions} type="show" getValue={getValue} />
      </div>
    </section>
  );
};

export default Filter;
