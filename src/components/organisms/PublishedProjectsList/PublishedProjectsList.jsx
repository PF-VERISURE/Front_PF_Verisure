import React, { useEffect, useState } from "react";
import ProjectService from "../../../services/ProjectService";
import ProjectCard from "../ProjectCard/ProjectCard";
import style from "./PublishedProjectsList.module.css";
import ApplicationService from "../../../services/ApplicationService";
import Title from "../../atoms/Title/Title";
import { useApplications } from "../../../hooks/useApplications"
import { useModal } from "../../../hooks/useModal";
import { InfoModal } from "../../templates/Modal/Modal";
import { useNavigate } from "react-router-dom";


const PublishedProjectsList = ({ title }) => {
    const [projects, setProjects] = useState([]);
    const { appliedProjectIds, refetch  } = useApplications();
    const infoModal = useModal();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await ProjectService().getPublishedProjects();
                setProjects(projects);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleApply = async (projectId) => {
        try {
            await ApplicationService.applyToProject(projectId);
            await refetch();
            infoModal.open();

        } catch (error) {
            console.error(error);
        }
        };

    return (
        <main className={style.main}>
            <Title title={title} />

            <section className={style.cards}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={handleApply}
                        isApplied={appliedProjectIds.includes(project.id)}
                        mode="public"
                    />
                ))}
            </section>
            {infoModal.isOpen && (
            <InfoModal
            text={
            <div>
                <div className={style.line}>Registracion exitosa!</div>
                <div className={style.line}>Gracias por tu participacion!</div>
            </div>
            }
            onClose={() => {
            infoModal.close();
            navigate("/voluntario/mis_proyectos");
        }}
            />
            )}
        </main>
    );
};

export default PublishedProjectsList;