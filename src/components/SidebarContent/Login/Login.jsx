import Input from "@components/Input/Input";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";

const Login = () => {
  const { container, title, boxCheck, boxButton, helpText } = styles;

  return (
    <div className={container}>
      <div className={title}>Login</div>
      <Input label="Username and password" type="text" isRequired />
      <Input label="Password" type="password" isRequired />

      <div className={boxCheck}>
        <input type="checkbox" />
        <span>Remember me</span>
      </div>

      <div className={boxButton}>
        <Button content="LOGIN" full />
      </div>

      <div className={helpText}>Lost your password?</div>
    </div>
  );
};

export default Login;
