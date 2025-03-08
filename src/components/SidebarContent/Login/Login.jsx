import { login, register } from "@/apis/authService";
import { useSidebarContext } from "@/contexts/useSidebarContext";
import { useStoreContext } from "@/contexts/useStoreContext";
import { useToastContext } from "@/contexts/useToastContext";
import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useState } from "react";
import * as yup from "yup";
import styles from "./styles.module.scss";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { container, title, boxCheck, boxButton, helpText } = styles;

  const { toast } = useToastContext();
  const { setIsOpen, handleGetCartProducts } = useSidebarContext();
  const { setUserId } = useStoreContext();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email").required("Email is required"),
      password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      cf_password: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password must match"),
    }),
    onSubmit: async (values) => {
      console.log(values);

      const { email: username, password } = values;
      if (isLoading) return;

      setIsLoading(true);
      if (isRegister) {
        await register({ username, password })
          .then((res) => {
            console.log(res);
            toast.success(res.data.message);
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.response.data.message || error.message);
          });
      } else {
        await login({ username, password })
          .then((res) => {
            console.log(res);
            const { id, token, refreshToken } = res.data;

            Cookies.set("id", id);
            Cookies.set("token", token);
            Cookies.set("refreshToken", refreshToken);

            toast.success("Login successfully");
            setIsOpen(false);
            setUserId(id);
            handleGetCartProducts(id);
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.response.data.message || error.message);
          });
      }
      setIsLoading(false);
    },
  });

  const handleToggle = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };

  return (
    <div className={container}>
      <div className={title}>{isRegister ? "SIGN UP" : "SIGN IN"}</div>

      <form onSubmit={formik.handleSubmit}>
        <Input
          id="email"
          label="Username or email"
          type="text"
          isRequired
          formik={formik}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          isRequired
          formik={formik}
        />
        {isRegister && (
          <Input
            id="cf_password"
            label="Confirm password"
            type="password"
            isRequired
            formik={formik}
          />
        )}

        {!isRegister && (
          <div className={boxCheck}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        )}

        <div className={boxButton}>
          <Button
            content={
              isLoading ? "Loading..." : isRegister ? "SIGN UP" : "LOGIN"
            }
            full
            type="submit"
            disabled={isLoading}
          />
        </div>
      </form>
      <div className={boxButton}>
        <Button
          content={
            isRegister ? "Already have an account?" : "Don't have an account?"
          }
          style={{ marginTop: "-10px" }}
          full
          typeButton="second"
          type="submit"
          onClick={handleToggle}
        />
      </div>

      {!isRegister && <div className={helpText}>Lost your password?</div>}
    </div>
  );
};

export default Login;
