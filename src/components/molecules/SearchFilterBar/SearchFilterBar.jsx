import { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import styles from "./SearchFilterBar.module.css";

const FILTER_OPTIONS = [
  { value: "all",        label: "Todos" },
  { value: "revision",   label: "En revisión" },
  { value: "activos",    label: "Activos" },
  { value: "archivados", label: "Archivados" },
  { value: "rechazados", label: "Rechazados" },
];

const SearchFilterBar = ({ search, onSearchChange, filter, onFilterChange }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLabel = FILTER_OPTIONS.find((o) => o.value === filter)?.label;

  return (
    <div className={styles.bar}>
      <SearchInput value={search} onChange={onSearchChange} placeholder="Buscar proyecto..." />

      <div className={styles.menuWrapper} ref={menuRef}>
        <button
          className={`${styles.menuBtn} ${filter !== "all" ? styles.menuBtnActive : ""}`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu size={18} />
          <span>{activeLabel}</span>
        </button>

        {open && (
          <div className={styles.dropdown}>
            {FILTER_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                className={`${styles.dropdownItem} ${filter === opt.value ? styles.dropdownItemActive : ""}`}
                onClick={() => { onFilterChange(opt.value); setOpen(false); }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilterBar;
