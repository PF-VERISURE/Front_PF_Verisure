import styles from "./DownloadButton.module.css";
import { FileDown } from "lucide-react";
import { useState } from "react";
import html2pdf from "html2pdf.js";

const DownloadButton = ({ contentRef, selectedYear, selectedMonth }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPdf = async () => {
    if (!contentRef?.current) return;

    try {
      setIsDownloading(true);
      const element = contentRef.current;

      let fileName = 'Reporte_Metricas';
      if (selectedYear) {
        fileName += `_${selectedYear}`;
        if (selectedMonth) {
          fileName += `_${String(selectedMonth).padStart(2, '0')}`;
        }
      } else {
        const currentYear = new Date().getFullYear();
        fileName += `_${currentYear}`;
      }
      fileName += '.pdf';

      const opt = {
        margin: [10, 10, 10, 10],
        filename: fileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          scrollY: -window.scrollY,
          windowWidth: 1200
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'], avoid: 'section' }
      };

      await html2pdf().set(opt).from(element).save();

    } catch (error) {
      console.error("Error al generar el PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className={`${styles.actionButton} ${styles.pdfButton}`}
        onClick={handleDownloadPdf}
        disabled={isDownloading}
      >
        <FileDown />
        <span className={styles.btnText}>
          {isDownloading ? "Descargando..." : "Descargar"}
        </span>
      </button>
    </>
  );
};

export default DownloadButton;
