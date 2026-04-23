import { User, Mail, Briefcase, X } from "lucide-react";
import styles from "./VolunteerProfileModal.module.css";

const getInitials = (first, last) =>
  `${first?.[0] ?? ""}${last?.[0] ?? ""}`.toUpperCase();

const VolunteerProfileModal = ({ volunteer, onClose }) => {
  if (!volunteer) return null;

  const fields = [
    { icon: User, label: "Nombre", value: `${volunteer.firstName} ${volunteer.lastName}` },
    { icon: Mail, label: "Email", value: volunteer.email },
    { icon: Briefcase, label: "Departamento", value: volunteer.department },
  ];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={18} />
        </button>

        <div className={styles.avatarSection}>
          <div className={styles.avatar}>
            {getInitials(volunteer.firstName, volunteer.lastName)}
          </div>
          <h2 className={styles.name}>
            {volunteer.firstName} {volunteer.lastName}
          </h2>
          <span className={styles.badge}>Voluntario</span>
        </div>

        <div className={styles.divider} />

        <div className={styles.fields}>
          {fields.map(({ icon: Icon, label, value }) => (
            <div key={label} className={styles.fieldRow}>
              <div className={styles.fieldIcon}>
                <Icon size={16} />
              </div>
              <div className={styles.fieldContent}>
                <span className={styles.fieldLabel}>{label}</span>
                <span className={styles.fieldValue}>{value || "—"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerProfileModal;
