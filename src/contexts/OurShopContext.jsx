/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getSpecificProducts } from "@/apis/productService";

const OurShopContext = createContext();

const OurShopProvider = ({ children }) => {
  const [sort, setSort] = useState("0");
  const [show, setShow] = useState("8");
  const [viewStyle, setViewStyle] = useState("grid");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const sortOptions = [
    {
      label: "Default sorting",
      value: "0",
    },
    {
      label: "Sort by popularity",
      value: "1",
    },
    {
      label: "Sort by average rating",
      value: "2",
    },
    {
      label: "Sort by latest",
      value: "3",
    },
    {
      label: "Sort by price: low to high",
      value: "4",
    },
    {
      label: "Sort by price: high to low",
      value: "5",
    },
  ];

  const showOptions = [
    {
      label: "8",
      value: "8",
    },
    {
      label: "12",
      value: "12",
    },
    {
      label: "All",
      value: "all",
    },
  ];

  const handleChangeSort = (sortValue) => setSort(sortValue);

  const handleChangeShow = (showValue) => setShow(showValue);

  const handleChangeViewStyle = (viewValue) => setViewStyle(viewValue);

  const values = {
    sortOptions,
    showOptions,
    sort,
    show,
    viewStyle,
    products,
    loading,
    handleChangeSort,
    handleChangeShow,
    handleChangeViewStyle,
  };

  useEffect(() => {
    const query = {
      sort,
      page: 1,
      limit: show,
    };

    setLoading(true);
    getSpecificProducts(query)
      .then((res) => {
        console.log(res);

        setProducts(res.contents);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [sort, show]);

  return (
    <OurShopContext.Provider value={values}>{children}</OurShopContext.Provider>
  );
};

export { OurShopContext };

export default OurShopProvider;
