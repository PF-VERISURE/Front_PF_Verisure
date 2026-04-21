import { useState, useEffect } from "react";
import SearchFilterBar from "../../../molecules/SearchFilterBar/SearchFilterBar";
import RevisionSection from "../../../organisms/RevisionSection/RevisionSection";
import ActivesSection from "../../../organisms/ActivesSection/ActivesSection";
import ArchivedSection from "../../../organisms/ArchivedSection/ArchivedSection";
import ProjectService from "../../../../services/ProjectService";
import styles from "./AdminProject.module.css";


const mockActivos = [
  { id: 4, gnoName: "Médicos Sin Fronteras (MSF)", title: "Esperanza a la fuerza", participants: ["Zoey Broks", "Lola Queen", "Drake Bell"], totalApplications: 10, totalVolunteers: 26, sdgs: ["Salud y bienestar"], locationType: "Presencial", startDate: "2026-03-01", endDate: "2026-04-01", totalHours: 50, description: "Programa de atención médica para comunidades vulnerables en zonas remotas." },
  { id: 5, gnoName: "Greenpeace España", title: "Ciudades en Verde", participants: ["Zoey Broks", "Lola Queen", "Drake Bell"], totalApplications: 10, totalVolunteers: 26, sdgs: ["Ciudades y comunidades sostenibles"], locationType: "Híbrido", startDate: "2026-03-15", endDate: "2026-05-15", totalHours: 30, description: "Iniciativa para crear espacios verdes urbanos y mejorar la calidad del aire en las ciudades." },
  { id: 6, gnoName: "Fundación ONCE", title: "Proyecto Esenciales", participants: ["Zoey Broks", "Lola Queen", "Drake Bell"], totalApplications: 10, totalVolunteers: 26, sdgs: ["Reducción de las desigualdades"], locationType: "Online", startDate: "2026-04-01", endDate: "2026-06-01", totalHours: 40, description: "Apoyo a personas con discapacidad para su integración en el mercado laboral." },
];

const mockArchivados = [
  { id: 7, gnoName: "Médicos Sin Fronteras (MSF)", title: "Inclusión", participants: ["Zoey Broks", "Lola Queen", "Drake Bell"], totalApplications: 10, totalVolunteers: 26, sdgs: ["Igualdad de género"], locationType: "Presencial", startDate: "2025-01-01", endDate: "2025-06-01", totalHours: 60, description: "Proyecto de inclusión social para comunidades marginadas." },
  { id: 8, gnoName: "Greenpeace España", title: "Inclusión", participants: ["Zoey Broks", "Lola Queen", "Drake Bell"], totalApplications: 10, totalVolunteers: 26, sdgs: ["Vida submarina"], locationType: "Online", startDate: "2025-03-01", endDate: "2025-09-01", totalHours: 45, description: "Campaña de sensibilización sobre la protección de ecosistemas marinos." },
];

const AdminProject = () => {
  const [search, setSearch] = useState("");
  const [revision, setRevision] = useState([]);

  useEffect(() => {
    const fetchRevision = async () => {
      try {
        const response = await ProjectService().getPendingProjects();
        setRevision(response.data);
      } catch (error) {
        console.error("Error al cargar proyectos en revisión:", error);
      }
    };
    fetchRevision();
  }, []);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Administración de proyectos</h1>
      <SearchFilterBar
        search={search}
        onSearchChange={(e) => setSearch(e.target.value)}
      />
      <RevisionSection proyectos={revision} />
      <ActivesSection proyectos={mockActivos} />
      <ArchivedSection proyectos={mockArchivados} />
    </div>
  )
};

export default AdminProject;
