import React from 'react'
import ProjectDetails from "../../molecules/ProjectDetails/ProjectDetails"
import DescriptionField from '../../atoms/DescriptionField/DescriptionField'
import style from "./ProjectCard.module.css"
import { formatDateRange } from '../../../utils/dateFormatting'
import CatLogo from '../../atoms/CatLogo/CatLogo';
import PrimaryButton from '../../atoms/PrimaryButton/PrimaryButton';
import { Calendar, MapPin, Users, ClipboardClock } from "lucide-react";
import { PROJECT_STATUS_UI } from "../../../utils/ProjectStatus";


const ProjectCard = ({project, onClick, isApplied, mode = "owner" | "public"}) => {

  const isOwnerView = mode === "owner";
  const isPublicView = mode === "public";
  const ui = PROJECT_STATUS_UI[project.status];

    const details = [
  {
    label: "Fechas",
    value: formatDateRange(project.startDate, project.endDate),
    icon: Calendar,
  },
  {
    label: "Modalidad",
    value: project.locationType,
    icon: MapPin,
  },
  {
    label: "Capacidad",
    value: project.requiredVolunteers,
    icon: Users,
  },
  {
    label: "Horas",
    value: project.totalHours,
    icon: ClipboardClock,
  },
];

return (
  <main className={style.card}>
    <img 
      src={project.imageUrl} 
      alt="Photo de illustracion del proyecto" 
      className={style.image}
    />

    <section  className={style.section2}>
      <h1 className={style.title}>{project.title}</h1>
      <DescriptionField text={project.description} />
      <ProjectDetails details={details}/>
    </section>

    <section className={style.section3}>
      <CatLogo categorie={project.sdgs?.[0]} />

      {isOwnerView && (
        <span className={style[ui.className]}>
        {ui.label}
      </span>
      )}

      {isPublicView && project.status === "PUBLISHED" && (
        <PrimaryButton
          text="REGISTRAR"
          className="registrar"
          onClick={() => onClick(project.id)}
        />
      )}

      {isPublicView && project.status !== "PUBLISHED" && (
        <PrimaryButton
          text="NO DISPONIBLE"
          className="disabled"
          onClick={null}
        />
      )}
    </section>
    </main>
)
};

export default ProjectCard