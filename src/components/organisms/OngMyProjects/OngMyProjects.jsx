import React, { useEffect, useState } from "react";
import ProjectService from "../../../services/ProjectService";
import ProjectCard from "../ProjectCard/ProjectCard";
import style from "./OngMyProjects.module.css";
import Title from "../../atoms/Title/Title";

const OngMyProjects = ({ title }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await ProjectService().getOngProjects();
                setProjects(projects);
            } catch (error) {
                console.error(error);
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
                    />
                ))}
            </section>
        </main>
    );
};

export default OngMyProjects ;