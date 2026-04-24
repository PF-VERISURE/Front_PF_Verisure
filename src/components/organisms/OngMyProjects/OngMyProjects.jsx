import React, { useEffect, useState } from "react";
import ProjectService from "../../../services/ProjectService";
import ProjectCard from "../ProjectCard/ProjectCard";
import style from "./OngMyProjects.module.css";
import Title from "../../atoms/Title/Title";
import { useModal } from "../../../hooks/useModal";
import { InfoModal } from "../../templates/Modal/Modal";

    const OngMyProjects = ({ title }) => {
    const [projects, setProjects] = useState([]);

    const errorModal = useModal();
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
        try {
            const projects = await ProjectService().getOngProjects();
            setProjects(projects);
        } catch (error) {
            console.error(error);

            const response = error.response?.data;

            if (response?.error) {
            setErrorMessage(response.error);
            } else {
            setErrorMessage("No se pudieron cargar los proyectos.");
            }

            errorModal.open();
        }
        };

        fetchData();
    }, []);

    return (
        <main className={style.main}>
        <Title title={title} />

        <section className={style.cards}>
            {projects.map((project) => (
            <ProjectCard
                key={project.id}
                project={project}
                mode="owner"
            />
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

export default OngMyProjects;