import SidebarIcon from "../../atoms/SidebarIcon/SidebarIcon";
import styles from "./SidebarSubItem.module.css";

const SidebarSubItem = ({ icon, label }) => {
  const Icon = icon;

  return (
    <button className={styles.subItem}>
      <SidebarIcon icon={Icon} size={16} />
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default SidebarSubItem;