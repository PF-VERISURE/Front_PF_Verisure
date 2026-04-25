import StatusFilterButton from "../../atoms/StatusFilterButton/StatusFilterButton";
import style from "./ProjectFilterBar.module.css";

const FILTERS = [
  { label: "Todos",       value: "ALL",       color: "#0f172a" },
  { label: "En revisión", value: "PENDING",   color: "#ea580c" },
  { label: "Publicados",  value: "PUBLISHED", color: "#16a34a" },
  { label: "Completados", value: "COMPLETED", color: "#2563eb" },
  { label: "Rechazados",  value: "REJECTED",  color: "#dc2626" },
  { label: "Cancelados",  value: "CANCELED",  color: "#64748b" },
];

const ProjectFilterBar = ({ projects, activeFilter, onFilterChange }) => {
  const countOf = (value) =>
    value === "ALL"
      ? projects.length
      : projects.filter((p) => p.status === value).length;

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

export default ProjectFilterBar;
