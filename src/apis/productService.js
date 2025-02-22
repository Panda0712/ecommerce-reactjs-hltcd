import axiosClient from "@/apis/axiosClient";

export const getProducts = async () => {
  const res = await axiosClient.get("/product?limit=10");

  return res.data;
};
