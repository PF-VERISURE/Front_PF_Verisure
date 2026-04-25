import React from "react";
import style from "./Certificate.module.css";
import { formatDateRange } from "../../../utils/dateFormatting";
import { LOCATION_TYPE_LABELS } from "../../../utils/translation";

const Certificate = ({ application }) => {
  // if (!application) return null;

  if (!application) {
  return <p>No certificado disponible de momento</p>;
}

  const isValid = application.status === "APPROVED";

  return (
    <section className={style.diploma}>
      <header className={style.header}>
        <h1>Certificado de Participación</h1>
        <p>Se otorga a:</p>
      </header>

      <h2 className={style.title}>
        {application.projectTitle}
      </h2>

      <img
        src={application.imageUrl}
        alt="Proyecto"
        className={style.image}
      />

      <div className={style.details}>
        <p>
          📅 Periodo:{" "}
          {formatDateRange(application.startDate, application.endDate)}
        </p>

        <p>
          🕒 Horas realizadas: {application.totalHours}
        </p>

        <p>
          📍 Modalidad: {LOCATION_TYPE_LABELS[application.locationType]}
        </p>

        <p>
          📅 Fecha de inscripción:{" "}
          {new Date(application.appliedAt).toLocaleDateString()}
        </p>
      </div>

      <footer className={style.footer}>
        {isValid ? (
          <strong>Estado: Participación validada ✔</strong>
        ) : (
          <strong>Estado no válido para certificación</strong>
        )}
      </footer>
    </section>
  );
};

export default Certificate;