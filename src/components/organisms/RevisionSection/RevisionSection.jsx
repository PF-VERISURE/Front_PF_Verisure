import ProjectRevisionRow from "../../molecules/ProjectRevisionRow/ProjectRevisionRow";
import styles from "./RevisionSection.module.css";

const RevisionSection = ({ proyectos }) => {
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
          gnoName={p.gnoName}
          title={p.title}
          requiredVolunteers={p.requiredVolunteers}
          status={p.status}
        />
      ))}
    </div>
  );
};

export default RevisionSection;
