import styles from "./SidebarText.module.css";

const SidebarText = ({ children }) => {
  return <span className={styles.text}>{children}</span>;
};

export default SidebarText;