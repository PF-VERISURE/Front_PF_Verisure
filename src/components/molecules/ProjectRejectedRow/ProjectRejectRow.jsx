import { useState } from "react";
import ProjectInfoModal from "../ProjectInfoModal/ProjectInfoModal";
import styles from "./ProjectRejectedRow.module.css";

const ProjectRejectedRow = ({ project }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className={styles.row} onClick={() => setShowInfo(true)}>
        <span>{project.gnoName || "Sin nombre de ONG"}</span>
        <span>{project.title || "Sin título"}</span>
      </div>
      {showInfo && (
        <ProjectInfoModal
          project={project}
          onClose={() => setShowInfo(false)}
        />
      )}
    </>
  );
};

export default ProjectRejectedRow;
