import { Building2, FolderOpen, Tag, MapPin, Calendar, CalendarCheck, Users, ClipboardList, Clock, FileText } from "lucide-react";
import styles from "./ProjectInfoModal.module.css";

const SDG_LABELS = {
  1: "Agua limpia y saneamiento",
  2: "Salud y bienestar",
  3: "Ciudades y comunidades sostenibles",
  4: "Energía asequible y no contaminante",
  5: "Hambre cero",
  6: "Igualdad de género",
  7: "Fin de la pobreza",
  8: "Producción y consumo responsables",
  9: "Reducción de las desigualdades",
  10: "Vida submarina",
};

const formatDate = (dateStr) => {
  if (!dateStr) return "Sin fecha";
  return new Date(dateStr).toLocaleDateString("es-ES");
};

const getCategoryLabel = (sdgIds) => {
  if (!sdgIds || sdgIds.length === 0) return "Sin categoría";
  return sdgIds.map((id) => SDG_LABELS[id] || id).join(", ");
};

const ProjectInfoModal = ({ project, onClose }) => {
  if (!project) return null;

  const fields = [
    { label: "Nombre de la Ong", value: project.gnoName || "Sin nombre de ONG", icon: Building2 },
    { label: "Nombre del proyecto", value: project.title || "Sin título", icon: FolderOpen },
    { label: "Categoría", value: getCategoryLabel(project.sdgIds), icon: Tag },
    { label: "Modalidad", value: project.locationType || "Sin modalidad", icon: MapPin },
    { label: "Fecha de Inicio", value: formatDate(project.startDate), icon: Calendar },
    { label: "Fecha de finalización", value: formatDate(project.endDate), icon: CalendarCheck },
    { label: "Número de voluntarios", value: project.totalVolunteers ?? "Sin dato de voluntarios", icon: Users },
    { label: "Número de aplicaciones", value: project.totalApplications ?? "Sin dato de aplicaciones", icon: ClipboardList },
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
        <div className={styles.actions}>
          <button className={styles.btnAprobar}>Aprobar</button>
          <button className={styles.btnRechazar}>Rechazar</button>
          <button className={styles.btnInfo}>Pedir Información</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoModal;
