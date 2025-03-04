import axiosClient from "@/apis/axiosClient";

const getProducts = async () => {
  const res = await axiosClient.get("/product?limit=10");

  return res.data;
};

const getSpecificProducts = async (query) => {
  const { sort, page, limit } = query;

  const queryLimit = limit === "all" ? "" : `&limit=${limit}`;

  const res = await axiosClient.get(
    `/product?sortType=${sort}&page=${page}${queryLimit}`
  );

  return res.data;
};

export { getProducts, getSpecificProducts };
