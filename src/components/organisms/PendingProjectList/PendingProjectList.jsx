import React, { useEffect, useState } from "react";
import ProjectService from "../../../services/ProjectService";
import ProjectCard from "../ProjectCard/ProjectCard";
import style from "./PendingProjectList.module.css";
import { useModal } from "../../../hooks/useModal";
import { InfoModal } from "../../templates/Modal/Modal";

const PendingProjectList = ({ title }) => {
  const [projects, setProjects] = useState([]);

  const errorModal = useModal();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await ProjectService().getPendingProjects();
        setProjects(response.data);
      } catch (error) {
        console.error(error);

        const response = error.response?.data;

        if (response?.error) {
          setErrorMessage(response.error);
        } else {
          setErrorMessage("No se pudieron cargar los proyectos pendientes.");
        }

        errorModal.open();
      }
    };

    fetchProjects();
  }, []);

  return (
    <main className={style.main}>
      <h1>{title}</h1>

      <section className={style.cards}>
        {Array.isArray(projects) &&
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </section>

      {errorModal.isOpen && (
        <InfoModal
          text={errorMessage}
          onClose={errorModal.close}
        />
      )}
    </main>
  );
};

export default PendingProjectList;