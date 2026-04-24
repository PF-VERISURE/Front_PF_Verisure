import { useState, useEffect } from "react";
import SearchFilterBar from "../../../molecules/SearchFilterBar/SearchFilterBar";
import RevisionSection from "../../../organisms/RevisionSection/RevisionSection";
import ActivesSection from "../../../organisms/ActivesSection/ActivesSection";
import ArchivedSection from "../../../organisms/ArchivedSection/ArchivedSection";
import RejectedSection from "../../../organisms/RejectedSection/RejectedSection";
import ProjectService from "../../../../services/ProjectService";
import styles from "./AdminProject.module.css";
import { useModal } from "../../../../hooks/useModal";
import { ConfirmModal, InfoModal } from "../../../templates/Modal/Modal";

const AdminProject = () => {
  const [search, setSearch] = useState("");
  const [revision, setRevision] = useState([]);
  const [activos, setActivos] = useState([]);
  const [archivados, setArchivados] = useState([]);
  const [rechazados, setRechazados] = useState([]);

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

  const fetchArchivadosYRechazados = async () => {
    try {
      const todos = await ProjectService().getAllProjects();
      setArchivados(todos.filter((p) => p.status === "CLOSED"));
      setRechazados(todos.filter((p) => p.status === "REJECTED"));
    } catch (error) {
      console.error("Error al cargar proyectos:", error);
    }
  };

  useEffect(() => {
    fetchRevision();
    fetchActivos();
    fetchArchivadosYRechazados();
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

  const handleReject = async (id) => {
    try {
      await ProjectService().updateProjectStatus(id, "REJECTED");
      await fetchRevision();
      await fetchArchivadosYRechazados();
    } catch (error) {
      console.error("Error al rechazar proyecto:", error);
    }
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Administración de proyectos</h1>
      <SearchFilterBar
        search={search}
        onSearchChange={(e) => setSearch(e.target.value)}
      />
      <RevisionSection proyectos={revision} onApprove={handleApprove} onReject={handleReject} />
      <ActivesSection proyectos={activos} />
      <ArchivedSection proyectos={archivados} />
      <RejectedSection proyectos={rechazados} />
    </div>
  );
};

export default AdminProject;
