import StatusFilterButton from "../../atoms/StatusFilterButton/StatusFilterButton";
import style from "./ApplicationFilterBar.module.css";

const FILTERS = [
  { label: "Todos",           value: "ALL",        statusClass: "all" },
  { label: "Pendiente",       value: "PENDING",    statusClass: "pending" },
  { label: "Aprobado",        value: "APPROVED",   statusClass: "approved" },
  { label: "Lista de espera", value: "WAITLISTED", statusClass: "waitlisted" },
  { label: "Cerrado",         value: "CLOSED",     statusClass: "closed" },
];

const ApplicationFilterBar = ({ applications, activeFilter, onFilterChange }) => {
  const countOf = (value) =>
    value === "ALL"
      ? applications.length
      : applications.filter((a) => a.status === value).length;

  return (
    <div className={style.bar}>
      {FILTERS.map(({ label, value, statusClass }) => (
        <StatusFilterButton
          key={value}
          label={label}
          count={countOf(value)}
          statusClass={statusClass}
          isActive={activeFilter === value}
          onClick={() => onFilterChange(value)}
        />
      ))}
    </div>
  );
};

export default ApplicationFilterBar;
