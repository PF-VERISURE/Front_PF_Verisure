import { useState, useEffect } from "react";
import SearchFilterBar from "../../../molecules/SearchFilterBar/SearchFilterBar";
import RevisionSection from "../../../organisms/RevisionSection/RevisionSection";
import ActivesSection from "../../../organisms/ActivesSection/ActivesSection";
import ArchivedSection from "../../../organisms/ArchivedSection/ArchivedSection";
import ProjectService from "../../../../services/ProjectService";
import styles from "./AdminProject.module.css";
import { useModal } from "../../../../hooks/useModal";
import { ConfirmModal, InfoModal } from "../../../templates/Modal/Modal";

const mockArchivados = [
  { id: 7, gnoName: "Médicos Sin Fronteras (MSF)", title: "Inclusión", participants: ["Zoey Broks", "Lola Queen", "Drake Bell"], totalApplications: 10, totalVolunteers: 26, sdgs: ["Igualdad de género"], locationType: "Presencial", startDate: "2025-01-01", endDate: "2025-06-01", totalHours: 60, description: "Proyecto de inclusión social para comunidades marginadas." },
  { id: 8, gnoName: "Greenpeace España", title: "Inclusión", participants: ["Zoey Broks", "Lola Queen", "Drake Bell"], totalApplications: 10, totalVolunteers: 26, sdgs: ["Vida submarina"], locationType: "Online", startDate: "2025-03-01", endDate: "2025-09-01", totalHours: 45, description: "Campaña de sensibilización sobre la protección de ecosistemas marinos." },
];

const AdminProject = () => {
  const [search, setSearch] = useState("");
  const [revision, setRevision] = useState([]);
  const [activos, setActivos] = useState([]);

  const successModal = useModal();

  

  const fetchRevision = async () => {
    try {
      const response = await ProjectService().getPendingProjects();
      setRevision(response.data);
    } catch (error) {
      console.error("Error al cargar proyectos en revisión:", error);
    }
  };

  const fetchActivos = async () => {
    try {
      const response = await ProjectService().getPublishedProjects();
      setActivos(response);
    } catch (error) {
      console.error("Error al cargar proyectos activos:", error);
    }
  };

  useEffect(() => {
    fetchRevision();
    fetchActivos();
  }, []);

  const handleApprove = async (id) => {
    try {
      await ProjectService().updateProjectStatus(id, "PUBLISHED");
      await fetchRevision();
      await fetchActivos();

    successModal.open();

    } catch (error) {
      console.error("Error al aprobar proyecto:", error);
    }
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Administración de proyectos</h1>
      <SearchFilterBar
        search={search}
        onSearchChange={(e) => setSearch(e.target.value)}
      />
      <RevisionSection proyectos={revision} onApprove={handleApprove} />
      <ActivesSection proyectos={activos} />
      <ArchivedSection proyectos={mockArchivados} />
      {successModal.isOpen && (
        <InfoModal
          text="Este proyecto ha sido aprobado correctamente. Ahora está en proyectos ACTIVOS."
          onClose={successModal.close}
        />
      )}
    </div>
  )
};

export default AdminProject;
