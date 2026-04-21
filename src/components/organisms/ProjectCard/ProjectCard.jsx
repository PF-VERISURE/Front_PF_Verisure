import React from 'react'
import ProjectDetails from "../../molecules/ProjectDetails/ProjectDetails"
import DescriptionField from '../../atoms/DescriptionField/DescriptionField'
import style from "./ProjectCard.module.css"
import { formatDateRange } from '../../../utils/dateFormatting'
import CatLogo from '../../atoms/CatLogo/CatLogo';
import PrimaryButton from '../../atoms/PrimaryButton/PrimaryButton';
import { Calendar, MapPin, Users, ClipboardClock } from "lucide-react";


const ProjectCard = ({project}) => {

// const [currentProject, setCurrentProject] = useState(project);
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

    <section  className={style.section3}>
      <CatLogo categorie={project.sdgs?.[0]}/>
      <PrimaryButton text="REGISTRAR" className="registrar" /*onClick={onClick}*//>
    </section>
  </main>
)
};

export default ProjectCard