import ProjectRevisionRow from "../../molecules/ProjectRevisionRow/ProjectRevisionRow";
import styles from "./RevisionSection.module.css";

const RevisionSection = ({ proyectos, onApprove, onReject }) => {
  if (proyectos.length === 0) {
    return (
      <div className={styles.section}>
        <div className={styles.sectionTitle}>EN REVISIÓN</div>
        <p>No hay proyectos en revisión</p>
      </div>
    );
  }

  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>EN REVISIÓN</div>
      <div className={styles.tableHeader}>
        <span>ONG</span>
        <span>Título del proyecto</span>
        <span>Número de vacantes</span>
        <span>Estado</span>
      </div>
      {proyectos.map((p) => (
        <ProjectRevisionRow
          key={p.id}
          project={p}
          onApprove={onApprove}
          onReject={onReject}
        />
      ))}
    </div>
  );
};

export default RevisionSection;
