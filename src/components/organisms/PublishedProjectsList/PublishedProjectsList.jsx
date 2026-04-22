import React, { useEffect, useState } from "react";
import ProjectService from "../../../services/ProjectService";
import ProjectCard from "../ProjectCard/ProjectCard";
import style from "./PublishedProjectsList.module.css";
import ApplicationService from "../../../services/ApplicationService";

const PublishedProjectsList = ({ title }) => {
    const [projects, setProjects] = useState([]);
    const [appliedProjects, setAppliedProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projects = await ProjectService().getPublishedProjects();
                setProjects(projects);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProjects();
    }, []);

    const handleApply = async (projectId) => {
        try {
            await ApplicationService.applyToProject(projectId);

            setAppliedProjects((prev) =>
            prev.includes(projectId) ? prev : [...prev, projectId]
                );

        } catch (error) {
            if (error.response?.status === 409) {
            setAppliedProjects((prev) => [...prev, projectId]);
            } else {
            console.error(error);
            }
        }
        };

    return (
        <main className={style.main}>
            <h1>{title}</h1>

            <section className={style.cards}>
                {Array.isArray(projects) &&
                    projects.map((project) => (
                        <ProjectCard key={project.id} project={project} onClick={handleApply} isApplied={appliedProjects.includes(project.id)}/>
                    ))}
            </section>
        </main>
    );
};

export default PublishedProjectsList;