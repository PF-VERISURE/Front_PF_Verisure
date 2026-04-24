import { useState } from "react";
import StatusBadge from "../../atoms/StatusBadge/StatusBadge";
import ProjectInfoModal from "../ProjectInfoModal/ProjectInfoModal";
import styles from "./ProjectRevisionRow.module.css";
import { useModal } from "../../../hooks/useModal";
import { InfoModal } from "../../templates/Modal/Modal";

const ProjectRevisionRow = ({ project, onApprove }) => {
  const [showModal, setShowModal] = useState(false);

  const errorModal = useModal();
  const [errorMessage, setErrorMessage] = useState("");

  const handleApprove = async () => {
    try {
      await onApprove(project.id);

      setShowModal(false);

    } catch (error) {
      console.error("Error al aprobar el proyecto:", error);

      const response = error.response?.data;

      if (response?.error) {
        setErrorMessage(response.error);
      } else {
        setErrorMessage("No se pudo aprobar el proyecto. Intenta nuevamente.");
      }

      errorModal.open();
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
        />
      )}

      {errorModal.isOpen && (
        <InfoModal
          text={errorMessage}
          onClose={errorModal.close}
        />
      )}
    </>
  );
};

export default ProjectRevisionRow;