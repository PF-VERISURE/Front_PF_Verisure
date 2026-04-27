import StatusFilterButton from "../../atoms/StatusFilterButton/StatusFilterButton";
import style from "./ProjectFilterBar.module.css";

const FILTERS = [
  { label: "Todos",       value: "ALL",       statusClass: "all" },
  { label: "En revisión", value: "PENDING",   statusClass: "pending" },
  { label: "Publicados",  value: "PUBLISHED", statusClass: "published" },
  { label: "Completados", value: "COMPLETED", statusClass: "completed" },
  { label: "Rechazados",  value: "REJECTED",  statusClass: "rejected" },
  { label: "Cancelados",  value: "CANCELED",  statusClass: "canceled" },
];

const ProjectFilterBar = ({ projects, activeFilter, onFilterChange }) => {
  const countOf = (value) =>
    value === "ALL"
      ? projects.length
      : projects.filter((p) => p.status === value).length;

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

export default ProjectFilterBar;
