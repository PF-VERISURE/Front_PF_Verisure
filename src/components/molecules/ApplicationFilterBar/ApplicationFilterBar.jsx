import StatusFilterButton from "../../atoms/StatusFilterButton/StatusFilterButton";
import style from "./ApplicationFilterBar.module.css";

const FILTERS = [
  { label: "Todos",           value: "ALL",        color: "#0f172a" },
  { label: "Pendiente",       value: "PENDING",    color: "#ea580c" },
  { label: "Aprobado",        value: "APPROVED",   color: "#16a34a" },
  { label: "Lista de espera", value: "WAITLISTED", color: "#7c3aed" },
  { label: "Rechazado",       value: "REJECTED",   color: "#dc2626" },
  { label: "Cerrado",         value: "CLOSED",     color: "#1e293b" },
];

const ApplicationFilterBar = ({ applications, activeFilter, onFilterChange }) => {
  const countOf = (value) =>
    value === "ALL"
      ? applications.length
      : applications.filter((a) => a.status === value).length;

  return (
    <div className={style.bar}>
      {FILTERS.map(({ label, value, color }) => (
        <StatusFilterButton
          key={value}
          label={label}
          count={countOf(value)}
          color={color}
          isActive={activeFilter === value}
          onClick={() => onFilterChange(value)}
        />
      ))}
    </div>
  );
};

export default ApplicationFilterBar;
