import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./styles.module.scss";

const Loading = () => {
  const { rotate } = styles;

  return <AiOutlineLoading3Quarters className={rotate} />;
};

export default Loading;
