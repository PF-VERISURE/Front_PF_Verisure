import React from "react";
import ProjectDetails from "../../molecules/ProjectDetails/ProjectDetails";
import style from "./ApplicationCard.module.css";
import { formatDateRange } from "../../../utils/dateFormatting";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import { Calendar, MapPin, Clock, ClipboardClock } from "lucide-react";
import { LOCATION_TYPE_LABELS } from '../../../utils/translation';
import CatLogo from "../../atoms/CatLogo/CatLogo";
import { motion } from "framer-motion";

const STATUS_UI = {
  PENDING:    { label: "Pendiente",          className: style.pending },
  WAITLISTED: { label: "Lista de espera",    className: style.waitlisted },
  APPROVED:   { label: "Aprobado",           className: style.approved },
  REJECTED:   { label: "Rechazado",          className: style.rejected },
  CANCELED:   { label: "Cancelado",          className: style.canceled },
  CLOSED:     { label: "Cerrado",            className: style.closed },
};

const ApplicationCard = ({ application, onCancel }) => {
  const details = [
    { label: "Fechas",      value: formatDateRange(application.startDate, application.endDate), icon: Calendar },
    { label: "Modalidad",   value: LOCATION_TYPE_LABELS[application.locationType],              icon: MapPin },
    { label: "Inscripción", value: new Date(application.appliedAt).toLocaleDateString(),        icon: Clock },
    { label: "Horas",       value: application.totalHours,                                      icon: ClipboardClock },
  ];

  const ui = STATUS_UI[application.status] ?? { label: application.status, className: "" };

  const isCancellable =
    application.status === "APPROVED" ||
    application.status === "PENDING"  ||
    application.status === "WAITLISTED";

  return (
    <motion.article
      className={style.card}
      whileHover={{ y: -3, boxShadow: "0 16px 40px rgba(99,102,241,0.13)" }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {application.imageUrl && application.imageUrl !== "url" && (
        <img src={application.imageUrl} alt="Imagen del proyecto" className={style.image} />
      )}

      <div className={style.body}>
        <h2 className={style.title}>{application.projectTitle}</h2>
        <div className={style.chips}>
          <ProjectDetails details={details} />
        </div>
      </div>

      <div className={style.side}>
        <div className={style.sideTop}>
          <CatLogo categorie={application.sdgs?.[0]} />
        </div>
        <div className={style.sideBottom}>
          <span className={ui.className}>{ui.label}</span>
          {isCancellable && (
            <PrimaryButton
              text="CANCELAR"
              className="cancel"
              onClick={() => onCancel(application.applicationId)}
            />
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ApplicationCard;
