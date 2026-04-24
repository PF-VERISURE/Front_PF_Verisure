import styles from "./PrimaryButton.module.css";

function PrimaryButton({ type, onClick, className, text }) {
  const isDisabledStyle = className === "inscrito";

  const btnClass = `
    ${styles.base} 
    ${styles[className]} 
    ${isDisabledStyle ? styles.disabled : ""}
  `;

  return (
    <button
      type={type}
      className={btnClass}
      onClick={onClick}
      disabled={isDisabledStyle}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;