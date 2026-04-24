import React from "react";
import ApplicationCard from "../ApplicationCard/ApplicationCard";
import style from "./MyApplications.module.css";
import Title from "../../atoms/Title/Title";
import { useApplications } from "../../../hooks/useApplications";
import { useModal } from "../../../hooks/useModal";
import { ConfirmModal } from "../../templates/Modal/Modal";
import { useState } from "react";

const MyApplications = ({ title }) => {
    const { applications, cancelApplication } = useApplications();
    const confirmModal = useModal();
    const [selectedAppId, setSelectedAppId] = useState(null);

    const handleCancelClick = (applicationId) => {
    setSelectedAppId(applicationId);
    confirmModal.open();
    };

    const handleConfirmCancel = async () => {
    if (!selectedAppId) return;

    await cancelApplication(selectedAppId);
    confirmModal.close();
    setSelectedAppId(null);
};

    return (
        <main className={style.main}>
            <Title title={title} />

            <section className={style.cards}>
                {applications
                    .filter(app => app.status !== "CANCELED")
                    .map(app => (
                        <ApplicationCard
                            key={app.applicationId}
                            application={app}
                            onCancel={handleCancelClick}
                        />
                    ))}

                {confirmModal.isOpen && (
                <ConfirmModal
                    text="Confirmas que quieres cancelar tu participacion a este proyecto?"
                    onConfirm={handleConfirmCancel}
                    onCancel={() => {
                        confirmModal.close();
                        setSelectedAppId(null);
                    }}
                />
            )}
            </section>
        </main>
    );
};

export default MyApplications;