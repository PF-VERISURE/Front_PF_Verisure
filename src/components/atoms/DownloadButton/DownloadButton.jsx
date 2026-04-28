import styles from "./DownloadButton.module.css";
import { FileDown } from "lucide-react";
import { useReactToPrint } from "react-to-print";

const DownloadButton = ({contentRef}) => {
  
  const handlePrint = useReactToPrint({
    contentRef: contentRef, 
  });

  return (
    <>
      <button
        className={`${styles.actionButton} ${styles.pdfButton}`}
        onClick={handlePrint}>
      
        <FileDown />
        <span className={styles.btnText}>Descargar</span>
      </button>
    </>
  );
};

export default DownloadButton;
