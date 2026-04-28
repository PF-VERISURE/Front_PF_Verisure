import React, { useEffect, useState } from "react";
import ProjectService from "../../../services/ProjectService";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectFilterBar from "../../molecules/ProjectFilterBar/ProjectFilterBar";
import style from "./OngMyProjects.module.css";
import Title from "../../atoms/Title/Title";
import { useModal } from "../../../hooks/useModal";
import { InfoModal } from "../../templates/Modal/Modal";

const OngMyProjects = ({ title }) => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("ALL");

  const errorModal = useModal();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ProjectService().getOngProjects();
        setProjects(data);
      } catch (error) {
        const response = error.response?.data;
        setErrorMessage(response?.error ?? "No se pudieron cargar los proyectos.");
        errorModal.open();
      }
    };
    fetchData();
  }, []);

  const visible = filter === "ALL"
    ? projects
    : projects.filter((p) => p.status === filter);

  return (
    <main className={style.main}>
      <Title title={title} />

      <ProjectFilterBar
        projects={projects}
        activeFilter={filter}
        onFilterChange={setFilter}
      />

      <section className={style.cards}>
        {visible.length === 0 ? (
          <p className={style.empty}>No hay proyectos en esta categoría.</p>
        ) : (
          visible.map((project) => (
            <ProjectCard key={project.id} project={project} mode="owner" />
          ))
        )}
      </section>

      {errorModal.isOpen && (
        <InfoModal text={errorMessage} onClose={errorModal.close} />
      )}
    </main>
  );
};

export default OngMyProjects;
