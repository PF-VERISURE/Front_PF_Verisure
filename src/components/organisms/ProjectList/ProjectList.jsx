import React, { useEffect, useState } from "react";
import ProjectService from "../../../services/ProjectService";
import ProjectCard from "../../organisms/ProjectCard/ProjectCard";

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
        try {
            const data = await ProjectService().getPendingProjects();
            setProjects(data);
        } catch (error) {
            console.error(error);
        }
        };

        fetchProjects();
    }, []);

    return (
        <section>
        {(projects || []).map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}
        </section>
    );
};

export default ProjectList;