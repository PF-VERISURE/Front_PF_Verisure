import React from "react";
import ProjectDetails from "../../molecules/ProjectDetails/ProjectDetails";
import style from "./ApplicationCard.module.css";
import { formatDateRange } from "../../../utils/dateFormatting";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import { Calendar, MapPin, Clock } from "lucide-react";

const ApplicationCard = ({ application, onCancel }) => {

    const details = [
        {
        label: "Fechas",
        value: formatDateRange(application.startDate, application.endDate),
        icon: Calendar,
        },
        {
        label: "Modalidad",
        value: application.locationType,
        icon: MapPin,
        },
        {
        label: "Inscripción",
        value: new Date(application.appliedAt).toLocaleDateString(),
        icon: Clock,
        },
    ];

    const getStatusLabel = (status) => {
    switch (status) {
        case "PENDING":
        return "Pendiente";
        case "WAITLISTED":
        return "En lista de espera";
        case "APPROVED":
        return "Aprobado";
        case "REJECTED":
        return "Rechazado";
        case "CANCELED":
        return "Cancelado";
        case "CLOSED":
        return "Cerrado";
        default:
        return status;
    }
    };

    const getStatusClass = (status) => {
    switch (status) {
        case "APPROVED":
        return style.success;
        case "PENDING":
        case "WAITLISTED":
        return style.pending;
        case "REJECTED":
        case "CANCELED":
        case "CLOSED":
        return style.error;
        default:
        return "";
    }
    };

    const isCancellable =
    application.status === "APPROVED" ||
    application.status === "PENDING" ||
    application.status === "WAITLISTED";

    return (
        <main className={style.card}>
        <img
            src={application.imageUrl}
            alt="Imagen del proyecto"
            className={style.image}
        />

        <section className={style.section2}>
            <h1 className={style.title}>{application.projectTitle}</h1>

        <ProjectDetails details={details} />

            <p className={style.status}>
            Estado: <strong>{getStatusLabel(application.status)}</strong>
            </p>
        </section>

        <section className={style.section3}>
            {isCancellable ? (
            <PrimaryButton
                text="CANCELAR"
                className="cancel"
                onClick={() => onCancel(application.applicationId)}
            />
            ) : (
            <PrimaryButton
                text={application.status}
                className="disabled"
                onClick={null}
            />
            )}
        </section>
        </main>
    );
    };

    export default ApplicationCard;