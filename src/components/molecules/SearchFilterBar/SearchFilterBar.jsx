import SearchInput from "../../atoms/SearchInput/SearchInput";
import styles from "./SearchFilterBar.module.css";

const SearchFilterBar = ({ search, onSearchChange }) => {
  return (
    <div className={styles.bar}>
      <SearchInput value={search} onChange={onSearchChange} />
      <div className={styles.filterPlaceholder}>
        FILTRO <span className={styles.arrow}>▼</span>
      </div>
    </div>
  );
};

export default SearchFilterBar;
