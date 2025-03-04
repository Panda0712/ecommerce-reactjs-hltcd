import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import styles from "../styles.module.scss";
import Button from "@components/Button/Button";

const Banner = () => {
  const { containerBanner, containerTimer, title } = styles;

  const targetDate = "2025-12-31T00:00:00";

  return (
    <div className={containerBanner}>
      <div className={containerTimer}>
        <CountdownTimer targetDate={targetDate} />
      </div>

      <h2 className={title}>The Classics Make A Comeback</h2>

      <Button content="Buy now" />
    </div>
  );
};

export default Banner;
