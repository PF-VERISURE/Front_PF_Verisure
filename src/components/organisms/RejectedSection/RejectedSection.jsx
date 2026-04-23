import ProjectRejectedRow from "../../molecules/ProjectRejectedRow/ProjectRejectRow";
import styles from "./RejectedSection.module.css";

const RejectedSection = ({ proyectos }) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>RECHAZADOS</div>
      <div className={styles.tableHeader}>
        <span>ONG</span>
        <span>Título del proyecto</span>
      </div>
      {proyectos.length === 0 ? (
        <p className={styles.empty}>No hay proyectos rechazados</p>
      ) : (
        proyectos.map((p) => (
          <ProjectRejectedRow key={p.id} project={p} />
        ))
      )}
    </div>
  );
};

export default RejectedSection;
