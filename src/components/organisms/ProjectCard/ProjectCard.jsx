import { motion } from "framer-motion";
import ProjectDetails from "../../molecules/ProjectDetails/ProjectDetails"
import DescriptionField from '../../atoms/DescriptionField/DescriptionField'
import style from "./ProjectCard.module.css"
import { formatDateRange } from '../../../utils/dateFormatting'
import CatLogo from '../../atoms/CatLogo/CatLogo';
import PrimaryButton from '../../atoms/PrimaryButton/PrimaryButton';
import { Calendar, MapPin, Users, ClipboardClock } from "lucide-react";
import { PROJECT_STATUS_UI } from "../../../utils/projectStatus";
import { LOCATION_TYPE_LABELS } from '../../../utils/translation'

const ProjectCard = ({project, application, onClick, isApplied, mode = "owner" | "public"}) => {

  const isOwnerView = mode === "owner";
  const isPublicView = mode === "public";
  const ui = PROJECT_STATUS_UI[project.status];
  const isPublished = project.status === "PUBLISHED";
  const isFull = project.totalApplications >= project.requiredVolunteers;

  const details = [
    { label: "Fechas", value: formatDateRange(project.startDate, project.endDate), icon: Calendar },
    { label: "Modalidad", value: LOCATION_TYPE_LABELS[project.locationType], icon: MapPin },
    { label: "Capacidad", value: project.requiredVolunteers, icon: Users },
    { label: "Horas", value: project.totalHours, icon: ClipboardClock },
  ];

  return (
    <motion.div
      className={style.card}
      whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(99,102,241,0.18)" }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {project.imageUrl && project.imageUrl !== "url" && (
        <img
          src={project.imageUrl}
          alt="Ilustración del proyecto"
          className={style.image}
        />
      )}

      <div className={style.body}>
        <div>
          <h2 className={style.title}>{project.title}</h2>
        </div>
        <DescriptionField text={project.description} />
        <div className={style.bottom}>
          <ProjectDetails details={details} />
        </div>
      </div>

      <div className={style.side}>
        <div className={style.sideTop}>
          <CatLogo categorie={project.sdgs?.[0]} />
        </div>
        <div className={style.sideBottom}>
          {isOwnerView && ui && (
            <span className={style[ui.className]}>{ui.label}</span>
          )}
          {isPublicView && (
            <>
              {isApplied && (
                <PrimaryButton text="INSCRITO" className="inscrito" onClick={null} />
              )}
              {!isApplied && isPublished && !isFull && (
                <PrimaryButton text="REGISTRAR" className="registrar" onClick={() => onClick(project.id)} />
              )}
              {!isApplied && isPublished && isFull && (
                <PrimaryButton text="LISTA DE ESPERA" className="waiting" onClick={() => onClick(project.id)} />
              )}
              {!isApplied && !isPublished && (
                <PrimaryButton text="NO DISPONIBLE" className="disabled" onClick={null} />
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
