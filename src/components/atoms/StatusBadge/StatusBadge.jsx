import styles from "./StatusBadge.module.css";

const variantMap = {
  "Nuevo": "nuevo",
  "Pendiente info": "pendienteInfo",
  "Pendiente revisión": "pendienteRevision",
};

const StatusBadge = ({ estado }) => {
  const variant = variantMap[estado] || "nuevo";
  return <span className={`${styles.badge} ${styles[variant]}`}>{estado}</span>;
};

export default StatusBadge;
