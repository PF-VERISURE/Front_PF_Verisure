import { useState } from "react";
import StatusBadge from "../../atoms/StatusBadge/StatusBadge";
import ProjectInfoModal from "../ProjectInfoModal/ProjectInfoModal";
import styles from "./ProjectRevisionRow.module.css";

const ProjectRevisionRow = ({ project, onApprove }) => {
  const [showModal, setShowModal] = useState(false);

  const handleApprove = async () => {
    await onApprove(project.id);
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.row} onClick={() => setShowModal(true)}>
        <span>{project.gnoName || "Sin nombre de ONG"}</span>
        <span>{project.title || "Sin título de proyecto"}</span>
        <span>{project.requiredVolunteers}</span>
        <StatusBadge estado={project.status} />
      </div>
      {showModal && (
        <ProjectInfoModal
          project={project}
          onClose={() => setShowModal(false)}
          onApprove={handleApprove}
        />
      )}
    </>
  );
};

export default ProjectRevisionRow;
