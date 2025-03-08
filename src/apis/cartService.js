import axiosClient from "@/apis/axiosClient";

const addProductToCart = async (data) => {
  return await axiosClient.post("/cart", data);
};

const getCart = async (userId) => {
  return await axiosClient.get(`/cart/${userId}`);
};

const deleteProductCart = async (productId, userId) => {
  return await axiosClient.delete(`/cart/deleteItem`, {
    data: { productId, userId },
  });
};

export { addProductToCart, getCart, deleteProductCart };
