import axiosClient from "./axiosClient";

const register = async (body) => {
  return await axiosClient.post("/register", body);
};

const login = async (body) => {
  return await axiosClient.post("/login", body);
};

const getUserInfo = async (id) => {
  return await axiosClient.get(`/user/info/${id}`);
};

export { register, login, getUserInfo };
