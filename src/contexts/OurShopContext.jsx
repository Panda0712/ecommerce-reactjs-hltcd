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
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

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

  const handleChangeSort = (sortValue) => {
    setSort(sortValue);
    setPage(1);
  };

  const handleChangeShow = (showValue) => {
    setShow(showValue);
    setPage(1);
  };

  const handleChangeViewStyle = (viewValue) => setViewStyle(viewValue);

  const handleLoadMore = () => {
    const query = {
      sortType: sort,
      page: page + 1,
      limit: show,
    };

    setLoadMore(true);
    getSpecificProducts(query)
      .then((res) => {
        setProducts((prev) => [...prev, ...res.contents]);
        setPage(+page);
        setTotal(res.total);
        setLoadMore(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadMore(false);
      });
  };

  const values = {
    sortOptions,
    showOptions,
    sort,
    show,
    viewStyle,
    products,
    loading,
    total,
    loadMore,
    handleChangeSort,
    handleChangeShow,
    handleChangeViewStyle,
    handleLoadMore,
  };

  useEffect(() => {
    const query = {
      sort,
      page,
      limit: show,
    };

    setLoading(true);
    getSpecificProducts(query)
      .then((res) => {
        console.log(res);

        setProducts(res.contents);
        setTotal(res.total);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [sort, show, page]);

  return (
    <OurShopContext.Provider value={values}>{children}</OurShopContext.Provider>
  );
};

export { OurShopContext };

export default OurShopProvider;
