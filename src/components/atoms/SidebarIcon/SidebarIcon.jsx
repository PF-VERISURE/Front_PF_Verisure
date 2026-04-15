import styles from "./SidebarIcon.module.css";

const SidebarIcon = ({ icon: Icon, size = 20 }) => {
  return (
    <span className={styles.iconWrapper}>
      <Icon size={size} />
    </span>
  );
};

export default SidebarIcon;