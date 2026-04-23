import { useState } from "react";
import StatusBadge from "../../atoms/StatusBadge/StatusBadge";
import ProjectInfoModal from "../ProjectInfoModal/ProjectInfoModal";
import styles from "./ProjectRevisionRow.module.css";

const ProjectRevisionRow = ({ project, onApprove, onReject }) => {
  const [showModal, setShowModal] = useState(false);

  const handleApprove = async () => {
    try {
      await onApprove(project.id);
      setShowModal(false);
    } catch (error) {
      console.error("Error al aprobar el proyecto:", error);
    }
  };

  const handleReject = async () => {
    try {
      await onReject(project.id);
      setShowModal(false);
    } catch (error) {
      console.error("Error al rechazar el proyecto:", error);
    }
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
          onReject={handleReject}
        />
      )}
    </>
  );
};

export default ProjectRevisionRow;
