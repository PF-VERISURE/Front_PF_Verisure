import style from "./Certificate.module.css";
import CatLogo from "../../atoms/CatLogo/CatLogo";


const CertificateCard = ({ certificate }) => {

const handleShare = () => {
  const url = window.location.href;

  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    "_blank"
  );
};

const handlePrint = () => {
  window.print();
};

  if (!certificate) {
    return <p>No certificado disponible de momento</p>;
  }

  return (
    <section className={style.printArea}>
    <section className={style.diploma}>
      <header className={style.header}>
        <h1>Certificado de Participación</h1>
        <p>Se otorga a:</p>
      </header>

      <h2 className={style.name}>
        {certificate.volunteerFullName}
      </h2>

      <p className={style.project}>
        Por su participación en el proyecto:        
      </p>
      <h3 className={style.projectTitle}> {certificate.projectTitle}</h3>

      {certificate.sdgs?.length > 0 && (
          <div className={style.sdgs}>
            {certificate.sdgs.map((sdg, index) => (
              <CatLogo key={index} categorie={sdg} />
            ))}
          </div>
        )}

      <div className={style.details}>
        <div className={style.block}>
          <span className={style.label}>Organización</span>
          <span className={style.value}>{certificate.gnoName}</span>
        </div>

        <div className={style.block}>
          <span className={style.label}>Horas</span>
          <span className={style.value}>{certificate.loggedHours}</span>
        </div>

        <div className={style.block}>
          <span className={style.label}>Fecha</span>
          <span className={style.value}>
            {new Date(certificate.endDate).toLocaleDateString()}
          </span>
        </div>

        
      </div>

      <footer className={style.footer}>
        <strong>Participación validada ✔</strong>
      </footer>

      <section>
        <button onClick={handlePrint} className={style.sectionButton}>
        Print / Download PDF
        </button>

        <button onClick={handleShare} className={style.sectionButton}>Share</button>
      </section>
    </section>
    </section>
  );
};

export default CertificateCard;