import SidebarIcon from "../../atoms/SidebarIcon/SidebarIcon";
import styles from "./SidebarSubItem.module.css";

const SidebarSubItem = ({ icon, label, isActive = false, onClick }) => {
  const Icon = icon;

  return (
    <button
      className={`${styles.subItem} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <SidebarIcon icon={Icon} size={16} />
      <span className={`${styles.label} ${isActive ? styles.labelActive : ""}`}>
        {label}
      </span>
    </button>
  );
};

export default SidebarSubItem;
