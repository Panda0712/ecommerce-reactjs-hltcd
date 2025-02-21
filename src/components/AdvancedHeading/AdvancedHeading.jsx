import Layout from "@components/Layout/Layout";
import styles from "./styles.module.scss";

const AdvancedHeading = () => {
  const { container, containerBox, headline, des, title } = styles;

  return (
    <Layout>
      <section className={container}>
        <div className={headline}></div>
        <div className={containerBox}>
          <p className={des}>Don&lsquo;t miss super offer</p>
          <p className={title}>Our best products</p>
        </div>
        <div className={headline}></div>
      </section>
    </Layout>
  );
};

export default AdvancedHeading;
