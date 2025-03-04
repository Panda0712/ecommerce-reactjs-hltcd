/* eslint-disable react/prop-types */
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { getUserInfo } from "@/apis/authService";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userId, setUserId] = useState(null);

  const handleLogout = (e) => {
    e.preventDefault();

    Cookies.remove("id");
    Cookies.remove("refreshToken");
    Cookies.remove("token");
    setUserInfo(null);
    window.location.reload();
  };

  useEffect(() => {
    if (userId) {
      getUserInfo(userId)
        .then((res) => {
          console.log(res);

          setUserInfo(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userId]);

  console.log(userInfo);

  return (
    <StoreContext.Provider value={{ userInfo, handleLogout, setUserId }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext };

export default StoreProvider;
