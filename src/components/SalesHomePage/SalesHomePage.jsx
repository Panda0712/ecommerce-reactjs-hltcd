import Button from "@components/Button/Button";
import useTranslate from "@/hooks/useTranslate";
import styles from "./styles.module.scss";

const SalesHomePage = () => {
  const { container, containerButton, containerImage, title, des } = styles;

  const { translateX } = useTranslate();

  return (
    <div className={container}>
      <div
        className={containerImage}
        style={{
          transform: `translateX(${translateX}px)`,
          transition: "transform 0.6s ease",
        }}
      >
        <img
          src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"
          alt=""
        />
      </div>
      <div>
        <h2 className={title}>Sale Of The Year</h2>
        <p className={des}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </p>
        <div className={containerButton}>
          <Button content="Read more" type="second" />
        </div>
      </div>
      <div
        className={containerImage}
        style={{
          transform: `translateX(-${translateX}px)`,
          transition: "transform 0.6s ease",
        }}
      >
        <img
          src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default SalesHomePage;
