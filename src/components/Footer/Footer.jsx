import { dataMenu } from "@components/Footer/constants";
import styles from "./styles.module.scss";
import footerLogo from "@assets/images/footer-logo.png";
import cardImage from "@assets/images/card-image.png";

const Footer = () => {
  const { container, containerMenu, title, copyright } = styles;

  return (
    <div className={container}>
      <div>
        <img width={160} height={55} src={footerLogo} alt="" />
      </div>

      <div className={containerMenu}>
        {dataMenu.map((data) => (
          <div key={data.content}>{data.content}</div>
        ))}
      </div>

      <div>
        <p className={title}>Guaranteed safe checkout</p>
        <img src={cardImage} alt="" />
      </div>

      <div>
        <p className={copyright}>
          Copyright © 2024 HLTCD theme. Created by HLTCD
        </p>
      </div>
    </div>
  );
};

export default Footer;
