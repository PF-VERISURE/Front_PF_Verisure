import { useCallback, useEffect, useState } from "react";
import ApplicationService from "../services/ApplicationService";

export const useApplications = () => {
    const [applications, setApplications] = useState([]);

    const fetchApplications = useCallback(async () => {
        try {
            const response = await ApplicationService.getMyApllications();
            setApplications(response.data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        fetchApplications();
    }, [fetchApplications]);

    const cancelApplication = async (applicationId) => {
        try {
            await ApplicationService.cancelApplication(applicationId);

            await fetchApplications();
        } catch (error) {
            console.error(error);
        }
    };

    const appliedProjectIds = applications
        .filter(app => app.status !== "CANCELED")
        .map(app => app.projectId);

    return {
        applications,
        appliedProjectIds,
        fetchApplications,
        cancelApplication,
        refetch: fetchApplications
    };
};