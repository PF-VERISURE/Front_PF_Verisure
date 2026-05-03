import style from "./PrintButton.module.css";
import { Printer } from "lucide-react";
import { useState } from "react";
import html2pdf from "html2pdf.js";

const PrintButton = ({ contentRef, selectedYear, selectedMonth }) => {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrintAsPdf = async () => {
    if (!contentRef?.current) {
      window.print();
      return;
    }

    try {
      setIsPrinting(true);
      const element = contentRef.current;

      let fileName = 'Imprimir_Metricas';
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

      const blobUrl = await html2pdf().set(opt).from(element).outputPdf('bloburl');

      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = blobUrl;
      document.body.appendChild(iframe);

      iframe.onload = () => {
        setTimeout(() => {
          iframe.contentWindow.focus();
          iframe.contentWindow.print();
        }, 500);
      };

    } catch (error) {
      console.error("Error al preparar la impresión:", error);
      window.print();
    } finally {
      setIsPrinting(false);
    }
  };

  return (
    <>
      <button 
        type="button" 
        className={style.actionButton} 
        onClick={handlePrintAsPdf}
        disabled={isPrinting}
      >
        <Printer />
        <span className={style.btnText}>
          {isPrinting ? "Preparando..." : "Imprimir"}
        </span>
      </button>
    </>
  );
};

export default PrintButton;