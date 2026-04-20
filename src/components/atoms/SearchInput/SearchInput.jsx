import { Search } from "lucide-react";
import styles from "./SearchInput.module.css";

const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <Search size={16} className={styles.icon} />
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder || ""}
      />
    </div>
  );
};

export default SearchInput;
