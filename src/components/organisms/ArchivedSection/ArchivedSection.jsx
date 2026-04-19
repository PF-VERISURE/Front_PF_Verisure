import ProjectArchivedRow from "../../molecules/ProjectArchivedRow/ProjectArchivedRow";
import styles from "./ArchivedSection.module.css";

const ArchivedSection = ({ proyectos }) => {
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
          gnoName={p.gnoName}
          title={p.title}
          participants={p.participants}
          totalApplications={p.totalApplications}
          totalVolunteers={p.totalVolunteers}
        />
      ))}
    </div>
  );
};

export default ArchivedSection;
