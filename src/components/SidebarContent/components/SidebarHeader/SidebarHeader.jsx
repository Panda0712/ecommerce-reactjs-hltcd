/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";

const SidebarHeader = ({ icon, title }) => {
  const { container, boxHeader } = styles;

  return (
    <div className={container}>
      <div className={boxHeader}>
        {icon}
        <div>{title}</div>
      </div>
    </div>
  );
};

export default SidebarHeader;
