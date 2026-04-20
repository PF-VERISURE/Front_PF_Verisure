import StatusBadge from "../../atoms/StatusBadge/StatusBadge";
import styles from "./ProjectRevisionRow.module.css";

const ProjectRevisionRow = ({ gnoName, title, requiredVolunteers, status }) => {
  return (
    <div className={styles.row}>
      <span>{gnoName || "Sin nombre de ONG"}</span>
      <span>{title || "Sin título de proyecto"}</span>
      <span>{requiredVolunteers}</span>
      <StatusBadge estado={status} />
    </div>
  );
};

export default ProjectRevisionRow;
