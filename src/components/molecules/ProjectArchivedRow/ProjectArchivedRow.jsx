import { useState, useEffect } from "react";
import ApplicationService from "../../../services/ApplicationService";
import ParticipantsModal from "../ParticipantsModal/ParticipantsModal";
import ProjectInfoModal from "../ProjectInfoModal/ProjectInfoModal";
import styles from "./ProjectArchivedRow.module.css";

const ProjectArchivedRow = ({ project }) => {
  const [showParticipants, setShowParticipants] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [closedCount, setClosedCount] = useState(0);

  const resolveList = (response) =>
    Array.isArray(response) ? response : Array.isArray(response?.data) ? response.data : [];

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await ApplicationService.getAllApplications();
        const allApplications = resolveList(response);
        const count = allApplications.filter(
          (app) => String(app.projectId) === String(project.id) && app.status === "CLOSED"
        ).length;
        setClosedCount(count);
      } catch {
        setClosedCount(0);
      }
    };
    fetchCount();
  }, [project.id]);

  const handleVerParticipants = async (e) => {
    e.stopPropagation();
    try {
      const response = await ApplicationService.getAllApplications();
      const allApplications = resolveList(response);
      const names = allApplications
        .filter((app) => String(app.projectId) === String(project.id) && app.status === "CLOSED")
        .map((app) => `${app.firstName} ${app.lastName}`);
      setParticipants(names);
    } catch (error) {
      console.error("Error al cargar participantes", error);
      return;
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
        <span>{closedCount}/{project.totalVolunteers}</span>
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
        />
      )}
    </>
  );
};

export default ProjectArchivedRow;
