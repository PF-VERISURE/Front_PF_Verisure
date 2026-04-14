import { ChevronDown, ChevronUp } from "lucide-react";
import SidebarIcon from "../../atoms/SidebarIcon/SidebarIcon";
import SidebarText from "../../atoms/SidebarText/SidebarText";
import styles from "./SidebarMainItem.module.css";

const SidebarMainItem = ({
  icon,
  label,
  hasDropdown = false,
  isOpen = false,
  onClick,
}) => {
  return (
    <button className={styles.mainItem} onClick={onClick}>
      <div className={styles.left}>
        <SidebarIcon icon={icon} />
        <SidebarText>{label}</SidebarText>
      </div>

      {hasDropdown && (
        <span className={styles.chevron}>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      )}
    </button>
  );
};

export default SidebarMainItem;