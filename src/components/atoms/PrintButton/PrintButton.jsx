import styles from "./PrintButton.module.css";
import { Printer } from "lucide-react";

const PrintButton = () => {
  return (
    <>
      <button className={style.actionButton} onClick={() => window.print()}>
        <Printer />
        <span className={style.btnText}>Imprimir</span>
      </button>
    </>
  );
};

export default PrintButton;
