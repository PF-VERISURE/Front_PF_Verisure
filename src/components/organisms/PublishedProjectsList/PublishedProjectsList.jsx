import React, { useEffect, useState } from "react";
import ProjectService from "../../../services/ProjectService";
import ProjectCard from "../ProjectCard/ProjectCard";
import style from "./PublishedProjectsList.module.css";
import ApplicationService from "../../../services/ApplicationService";
import Title from "../../atoms/Title/Title";
import { useApplications } from "../../../hooks/useApplications"

const PublishedProjectsList = ({ title }) => {
    const [projects, setProjects] = useState([]);
    const { appliedProjectIds } = useApplications();

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
                    />
                ))}
            </section>
        </main>
    );
};

export default PublishedProjectsList;