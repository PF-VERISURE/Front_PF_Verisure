import { Building2, FolderOpen, Tag, MapPin, Calendar, CalendarCheck, Users, ClipboardList, Clock, FileText } from "lucide-react";
import styles from "./ProjectInfoModal.module.css";

const formatDate = (dateStr) => {
  if (!dateStr) return "Sin fecha";
  return new Date(dateStr).toLocaleDateString("es-ES");
};

const ProjectInfoModal = ({ project, onClose, onApprove, applicationCount }) => {
  if (!project) return null;

  const fields = [
    { label: "Nombre de la Ong", value: project.gnoName || "Sin nombre de ONG", icon: Building2 },
    { label: "Nombre del proyecto", value: project.title || "Sin título", icon: FolderOpen },
    { label: "Categoría", value: (project.sdgs || []).join(", ") || "Sin categoría", icon: Tag },
    { label: "Modalidad", value: project.locationType || "Sin modalidad", icon: MapPin },
    { label: "Fecha de Inicio", value: formatDate(project.startDate), icon: Calendar },
    { label: "Fecha de finalización", value: formatDate(project.endDate), icon: CalendarCheck },
    { label: "Número de voluntarios", value: project.requiredVolunteers ?? "Sin dato de voluntarios", icon: Users },
    { label: "Número de aplicaciones", value: applicationCount ?? project.totalApplications ?? "Sin dato de aplicaciones", icon: ClipboardList },
    { label: "Horas", value: project.totalHours ? `${project.totalHours} horas` : "Sin horas registradas", icon: Clock },
  ];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <p className={styles.header}>Ficha completa del proyecto</p>
        <table className={styles.table}>
          <tbody>
            {fields.map((field, index) => {
              const Icon = field.icon;
              return (
                <tr key={index}>
                  <td className={styles.labelCell}>
                    <Icon size={13} className={styles.icon} />
                    {field.label}
                  </td>
                  <td className={styles.valueCell}>{field.value}</td>
                </tr>
              );
            })}
            <tr>
              <td className={styles.labelCell}>
                <FileText size={13} className={styles.icon} />
                Descripción
              </td>
              <td className={styles.descCell}>{project.description || "Sin descripción"}</td>
            </tr>
          </tbody>
        </table>
        {onApprove && (
          <div className={styles.actions}>
            <button className={styles.btnAprobar} onClick={onApprove}>Aprobar</button>
            <button className={styles.btnRechazar}>Rechazar</button>
            <button className={styles.btnInfo}>Pedir Información</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectInfoModal;
