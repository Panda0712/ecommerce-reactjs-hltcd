import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import styles from "../styles.module.scss";
import Button from "@components/Button/Button";

const CountdownBanner = () => {
  const { containerBanner, containerTimer, containerButton, title } = styles;
  const targetDate = "2025-12-31T00:00:00";

  return (
    <div className={containerBanner}>
      <div className={containerTimer}>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <p className={title}>The Classics Make A Comeback</p>
      <div className={containerButton}>
        <Button content="Buy now" />
      </div>
    </div>
  );
};

export default CountdownBanner;
