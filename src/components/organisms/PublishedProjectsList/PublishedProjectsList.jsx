import React, { useEffect, useState } from "react";
import ProjectService from "../../../services/ProjectService";
import ProjectCard from "../ProjectCard/ProjectCard";
import style from "./PublishedProjectsList.module.css";
import ApplicationService from "../../../services/ApplicationService";
import Title from "../../atoms/Title/Title";
import { useApplications } from "../../../hooks/useApplications"
import { useModal } from "../../../hooks/useModal";
import { InfoModal, ConfirmModal } from "../../templates/Modal/Modal";
import { useNavigate } from "react-router-dom";


const PublishedProjectsList = ({ title }) => {
    const [projects, setProjects] = useState([]);
    const { appliedProjectIds, refetch  } = useApplications();
    const infoModal = useModal();
    const navigate = useNavigate();;
    const confirmModal = useModal();
    const [selectedProject, setSelectedProject] = useState(null);
    const [applicationType, setApplicationType] = useState("normal");


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

    const applyAndShowSuccess = async (projectId) => {
  try {
    const response = await ApplicationService.applyToProject(projectId);

        if (response.status === "WAITLISTED") {
        setApplicationType("WAITLISTED");
        } else {
        setApplicationType("normal");
        }

        await refetch();
        infoModal.open();

    } catch (error) {
        console.error(error);
    }
    };

        const handleApply = (project) => {
        const maybeFull =
            project.totalApplications >= project.requiredVolunteers;

        if (maybeFull) {
            setSelectedProject(project);
            confirmModal.open();
            return;
        }

        applyAndShowSuccess(project.id);
        };

    

    return (
        <main className={style.main}>
            <Title title={title} />

            <section className={style.cards}>
                {projects.map((project) => (
                    <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => handleApply(project)}
                    isApplied={appliedProjectIds.includes(project.id)}
                    mode="public"
                    />
                ))}
            </section>

            {confirmModal.isOpen && (
            <ConfirmModal
                text="Este proyecto no tiene plazas vacantes. ¿Quieres inscribirte en la lista de espera?"
                onConfirm={async () => {
                confirmModal.close();
                if (!selectedProject) return;
                await applyAndShowSuccess(selectedProject.id);
                }}
                onCancel={() => {
                confirmModal.close();
                }}

                
            />
            )}
            
            {infoModal.isOpen && (
            <InfoModal
                text={
                    applicationType === "WAITLISTED" ? (
                    <div>
                        <div>Este proyecto no tiene plaza libre en este momento.</div>
                        <div>Has sido inscrito en la lista de espera</div>
                    </div>
                    ) : (
                    <div>
                        <div>Registración exitosa!</div>
                        <div>Gracias por tu participación!</div>
                    </div>
                    )
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