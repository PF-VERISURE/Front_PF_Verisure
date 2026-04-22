import React from "react";
import ApplicationCard from "../ApplicationCard/ApplicationCard";
import style from "./MyApplications.module.css";
import Title from "../../atoms/Title/Title";
import { useApplications } from "../../../hooks/useApplications";

const MyApplications = ({ title }) => {
    const { applications, cancelApplication } = useApplications();

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
                            onCancel={cancelApplication}
                        />
                    ))}
            </section>
        </main>
    );
};

export default MyApplications;