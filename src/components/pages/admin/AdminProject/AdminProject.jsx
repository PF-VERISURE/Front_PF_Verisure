import { useState } from "react";
import SearchFilterBar from "../../../molecules/SearchFilterBar/SearchFilterBar";
import RevisionSection from "../../../organisms/RevisionSection/RevisionSection";
import ActivesSection from "../../../organisms/ActivesSection/ActivesSection";
import ArchivedSection from "../../../organisms/ArchivedSection/ArchivedSection";
import styles from "./AdminProject.module.css";

const mockRevision = [
  { id: 1, gnoName: "Médicos Sin Fronteras (MSF)", title: "El Refugio de los Ideales", requiredVolunteers: 26, status: "Pendiente", sdgIds: [2], locationType: "Presencial", startDate: "2026-05-25", endDate: "2026-06-25", totalVolunteers: 26, totalApplications: 10, totalHours: 60, description: "Proyecto de ayuda humanitaria en zonas de conflicto para proporcionar asistencia médica básica." },
  { id: 2, gnoName: "Greenpeace España", title: "Tour de los Océanos 2026", requiredVolunteers: 20, status: "Pendiente", sdgIds: [10], locationType: "Híbrido", startDate: "2026-06-01", endDate: "2026-07-01", totalVolunteers: 20, totalApplications: 8, totalHours: 40, description: "Campaña de limpieza y concienciación sobre la contaminación de los océanos." },
  { id: 3, gnoName: "Fundación ONCE", title: "Reto ONCE Innova Emprendedores 2026", requiredVolunteers: 35, status: "Pendiente", sdgIds: [9], locationType: "Online", startDate: "2026-07-10", endDate: "2026-08-10", totalVolunteers: 35, totalApplications: 15, totalHours: 80, description: "Programa de emprendimiento e innovación social para personas con discapacidad." },
];

const mockActivos = [
  { id: 4, gnoName: "Médicos Sin Fronteras (MSF)", title: "Esperanza a la fuerza", participants: ["Zoey Broks", "Lola Queen", "Drake Bell"], totalApplications: 10, totalVolunteers: 26 },
  { id: 5, gnoName: "Greenpeace España", title: "Ciudades en Verde", participants: ["Zoey Broks", "Lola Queen", "Drake Bell"], totalApplications: 10, totalVolunteers: 26 },
  { id: 6, gnoName: "Fundación ONCE", title: "Proyecto Esenciales", participants: ["Zoey Broks", "Lola Queen", "Drake Bell"], totalApplications: 10, totalVolunteers: 26 },
];

const mockArchivados = [
  { id: 7, gnoName: "Médicos Sin Fronteras (MSF)", title: "Inclusión", participants: ["Zoey Broks", "Lola Queen", "Drake Bell"], totalApplications: 10, totalVolunteers: 26 },
  { id: 8, gnoName: "Greenpeace España", title: "Inclusión", participants: ["Zoey Broks", "Lola Queen", "Drake Bell"], totalApplications: 10, totalVolunteers: 26 },
  
];

const AdminProject = () => {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Administración de proyectos</h1>
      <SearchFilterBar
        search={search}
        onSearchChange={(e) => setSearch(e.target.value)}
      />
      <RevisionSection proyectos={mockRevision} />
      <ActivesSection proyectos={mockActivos} />
      <ArchivedSection proyectos={mockArchivados} />
    </div>
  );
};

export default AdminProject;
