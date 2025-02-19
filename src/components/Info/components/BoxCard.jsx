/* eslint-disable react/prop-types */
import styles from "../styles.module.scss";

const BoxCard = ({ titleText, descriptionText, src }) => {
  const { containerCard, containerContent, title, description } = styles;

  return (
    <div className={containerCard}>
      <img width={40} height={41} src={src} alt={src} />

      <div className={containerContent}>
        <div className={title}>{titleText}</div>
        <div className={description}>{descriptionText}</div>
      </div>
    </div>
  );
};

export default BoxCard;
