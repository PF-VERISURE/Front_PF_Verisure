import React, { useState } from "react";
import ApplicationCard from "../ApplicationCard/ApplicationCard";
import ApplicationFilterBar from "../../molecules/ApplicationFilterBar/ApplicationFilterBar";
import style from "./MyApplications.module.css";
import Title from "../../atoms/Title/Title";
import { useApplications } from "../../../hooks/useApplications";
import { useModal } from "../../../hooks/useModal";
import { ConfirmModal } from "../../templates/Modal/Modal";

const MyApplications = ({ title }) => {
  const { applications, cancelApplication } = useApplications();
  const confirmModal = useModal();
  const [selectedAppId, setSelectedAppId] = useState(null);
  const [filter, setFilter] = useState("ALL");

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

  const visibleApplications = applications
    .filter((app) => app.status !== "CANCELED" && app.status !== "REJECTED")
    .filter((app) => filter === "ALL" || app.status === filter);

  return (
    <main className={style.main}>
      <Title title={title} />

      <ApplicationFilterBar
        applications={applications.filter((app) => app.status !== "CANCELED" && app.status !== "REJECTED")}
        activeFilter={filter}
        onFilterChange={setFilter}
      />

      <section className={style.cards}>
        {visibleApplications.length === 0 ? (
          <p className={style.empty}>No hay voluntariados en esta categoría.</p>
        ) : (
          visibleApplications.map((app) => (
            <ApplicationCard
              key={app.applicationId}
              application={app}
              onCancel={handleCancelClick}
            />
          ))
        )}
      </section>

      {confirmModal.isOpen && (
        <ConfirmModal
          text="¿Confirmas que quieres cancelar tu participación en este proyecto?"
          onConfirm={handleConfirmCancel}
          onCancel={() => {
            confirmModal.close();
            setSelectedAppId(null);
          }}
        />
      )}
    </main>
  );
};

export default MyApplications;
