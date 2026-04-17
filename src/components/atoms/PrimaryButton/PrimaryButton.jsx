import styles from "./PrimaryButton.module.css";

function PrimaryButton({ action, type, onClick, className }) {

  const btnClass = `${styles.base} ${styles[className]}`;

  return (
    <button type={type} className={btnClass} onClick={onClick}>
      {action}
    </button>
  );
}

export default PrimaryButton;