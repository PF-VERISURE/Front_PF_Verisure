import styles from "./StatusBadge.module.css";

const StatusBadge = ({ estado }) => {
  return <span className={`${styles.badge} ${styles.pendiente}`}>{estado || "Pendiente"}</span>;
};

export default StatusBadge;
