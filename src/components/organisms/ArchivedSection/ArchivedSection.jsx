import ProjectArchivedRow from "../../molecules/ProjectArchivedRow/ProjectArchivedRow";
import styles from "./ArchivedSection.module.css";

const ArchivedSection = ({ proyectos }) => {
  if (!proyectos || proyectos.length === 0) {
    return (
      <div className={styles.section}>
        <div className={styles.sectionTitle}>ARCHIVADOS</div>
        <p>No hay proyectos archivados</p>
      </div>
    );
  }

  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>ARCHIVADOS</div>
      <div className={styles.tableHeader}>
        <span>ONG</span>
        <span>Título del proyecto</span>
        <span>Participantes</span>
        <span>Número de vacantes</span>
      </div>
      {proyectos.map((p) => (
        <ProjectArchivedRow
          key={p.id}
          project={p}
        />
      ))}
    </div>
  );
};

export default ArchivedSection;
