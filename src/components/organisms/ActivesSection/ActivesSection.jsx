import ProjectActiveRow from "../../molecules/ProjectActiveRow/ProjectActiveRow";
import styles from "./ActivesSection.module.css";

const ActivesSection = ({ proyectos }) => {
  const projects = proyectos || [];
  if (projects.length === 0) {
    return (
      <div className={styles.section}>
        <div className={styles.sectionTitle}>ACTIVOS</div>
        <p>No hay proyectos activos</p>
      </div>
    );
  }

  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>ACTIVOS</div>
      <div className={styles.tableHeader}>
        <span>ONG</span>
        <span>Título del proyecto</span>
        <span>Participantes</span>
        <span>Número de vacantes</span>
        <span>Acción</span>
      </div>
      {projects.map((p) => (
        <ProjectActiveRow
          key={p.id}
          project={p}
        />
      ))}
    </div>
  );
};

export default ActivesSection;
