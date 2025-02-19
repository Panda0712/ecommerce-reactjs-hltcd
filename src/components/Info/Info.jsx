import Layout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import { data } from "@components/Info/constants";
import BoxCard from "@components/Info/components/BoxCard";

const Info = () => {
  const { container } = styles;

  return (
    <Layout>
      <div className={container}>
        {data.map((item) => (
          <BoxCard
            key={item.title}
            titleText={item.title}
            descriptionText={item.description}
            src={item.src}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Info;
