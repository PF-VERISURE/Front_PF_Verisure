import { useState, useEffect } from "react";
import ApplicationService from "../../../services/ApplicationService";
import ParticipantsModal from "../ParticipantsModal/ParticipantsModal";
import ProjectInfoModal from "../ProjectInfoModal/ProjectInfoModal";
import styles from "./ProjectActiveRow.module.css";
import { useModal } from "../../../hooks/useModal";
import { InfoModal } from "../../templates/Modal/Modal";

const ProjectActiveRow = ({ project }) => {
  const [showParticipants, setShowParticipants] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [applicationCount, setApplicationCount] = useState(0);

  const errorModal = useModal();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await ApplicationService.getAllApplications();
        const allApplications = response.data || [];
        const filtered = allApplications.filter((app) => String(app.projectId) === String(project.id));
        setApplicationCount(filtered.length);
      } catch {
        setApplicationCount(0);
      }
    };
    fetchCount();
  }, [project.id]);

  const handleVerParticipants = async (e) => {
    e.stopPropagation();
    try {
      const response = await ApplicationService.getAllApplications();
      const allApplications = response.data || [];
      const filtered = allApplications.filter((app) => String(app.projectId) === String(project.id));
      const names = filtered.map((app) => `${app.firstName} ${app.lastName}`);
      setParticipants(names);
    } catch (error) {
      setErrorMessage(
        error?.response?.data?.message ||
        "Error del servidor a recoger data."
      );

      errorModal.open();
    }
    setShowParticipants(true);
  };

  return (
    <>
      <div className={styles.row} onClick={() => setShowInfo(true)}>
        <span>{project.gnoName || "Sin nombre de ONG"}</span>
        <span>{project.title || "Sin título de proyecto"}</span>
        <button className={styles.verBtn} onClick={handleVerParticipants}>
          Ver participantes
        </button>
        <span>{applicationCount}/{project.requiredVolunteers}</span>
      </div>
      {showParticipants && (
        <ParticipantsModal
          participants={participants}
          onClose={() => setShowParticipants(false)}
        />
      )}
      {showInfo && (
        <ProjectInfoModal
          project={project}
          onClose={() => setShowInfo(false)}
          applicationCount={applicationCount}
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

export default ProjectActiveRow;
