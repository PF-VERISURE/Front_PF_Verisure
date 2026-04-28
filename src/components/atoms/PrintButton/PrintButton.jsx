import styles from "./PrintButton.module.css";
import { Printer } from "lucide-react";

const PrintButton = () => {
  return (
    <>
      <button className={styles.actionButton} onClick={() => window.print()}>
        <Printer />
        <span className={styles.btnText}>Imprimir</span>
      </button>
    </>
  );
};

export default PrintButton;
