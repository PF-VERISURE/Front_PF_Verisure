import React, { useEffect, useState } from "react";
import ProjectService from "../../../services/ProjectService";
import ProjectCard from "../ProjectCard/ProjectCard";
import style from "./AllProjectsList.module.css"

const AllProjectsList = ({title}) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
        try {
            const data = await ProjectService().getAllProjects();
            setProjects(data);
        } catch (error) {
            console.error(error);
        }
        };

        fetchProjects();
    }, []);

    return (
        <main className={style.main}>
            <h1>{title}</h1>
            <section className={style.cards}>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
            </section>
        </main>
    );
};

export default AllProjectsList;