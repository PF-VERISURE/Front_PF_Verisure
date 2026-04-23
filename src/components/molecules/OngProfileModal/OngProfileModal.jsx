import { Building2, Mail, Hash, User, Phone, Globe, MapPin, X } from "lucide-react";
import styles from "./OngProfileModal.module.css";

const getInitials = (name) =>
  name
    ?.split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase() ?? "?";

const OngProfileModal = ({ ong, onClose }) => {
  if (!ong) return null;

  const fields = [
    { icon: Building2, label: "Organización", value: ong.organizationName },
    { icon: Hash,      label: "CIF",          value: ong.cif },
    { icon: Mail,      label: "Email",         value: ong.email },
    { icon: User,      label: "Contacto",      value: ong.contactName },
    { icon: Phone,     label: "Teléfono",      value: ong.contactPhone },
    { icon: Mail,      label: "Email contacto",value: ong.contactEmail },
    { icon: Globe,     label: "Web",           value: ong.website },
    { icon: MapPin,    label: "Dirección",     value: ong.address },
  ];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={18} />
        </button>

        <div className={styles.avatarSection}>
          <div className={styles.avatar}>
            {getInitials(ong.organizationName)}
          </div>
          <h2 className={styles.name}>{ong.organizationName}</h2>
          <span className={styles.badge}>ONG</span>
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

export default OngProfileModal;
