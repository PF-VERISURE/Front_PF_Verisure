import styles from "./KpiCard.module.css";

const KpiCard = ({ label, value, icon, text }) => {
  return (
    <>
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={styles.title}>{label}</span>
                <div className={styles.iconWrapper}>
                    {icon}
                </div>
            </div>

            <div className={styles.value}>{value}</div>

            <div className={styles.footer}>
                <span className={styles.acumuladoText}>{text}</span>
            </div>
        </div>
    </>
  );
};

export default KpiCard;