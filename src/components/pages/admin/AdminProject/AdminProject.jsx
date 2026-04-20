import { useState } from "react";
import SearchFilterBar from "../../../molecules/SearchFilterBar/SearchFilterBar";
import RevisionSection from "../../../organisms/RevisionSection/RevisionSection";
import ActivesSection from "../../../organisms/ActivesSection/ActivesSection";
import ArchivedSection from "../../../organisms/ArchivedSection/ArchivedSection";
import styles from "./AdminProject.module.css";

const mockRevision = [
  { id: 1, gnoName: "Médicos Sin Fronteras (MSF)", title: "El Refugio de los Ideales", requiredVolunteers: 26, status: "Pendiente" },
  { id: 2, gnoName: "Greenpeace España", title: "Tour de los Océanos 2026", requiredVolunteers: 20, status: "Pendiente" },
  { id: 3, gnoName: "Fundación ONCE", title: "Reto ONCE Innova Emprendedores 2026:", requiredVolunteers: 35, status: "Pendiente" },
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
