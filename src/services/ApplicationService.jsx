import axios from "axios";
import api from "./api";

    const url = "/api/v1/applications";

    const getAllApplications = async () =>{
            try{
            const response = await api.get(`${url}/all`);
            return response.data;
        } catch (error) {
            console.error ("Error getting applications", error);
            throw error;
        }
    };

    const applyToProject = async (projectId) => {
        try {
            const response = await api.post(`${url}`, {
            projectId: projectId,
            });
            return response.data;
        } catch (error) {
            console.error("Error applying to project", error);
            throw error;
        }
        };

    const cancelApplication= async (id) =>{
            try{
            const response = await api.patch(`${url}/${id}/cancel`);
            return response.data;
        } catch (error) {
            console.error ("Error getting applications", error);
            throw error;
        }
    };

    const getMyApllications= async () =>{
            try{
            const response = await api.get(`${url}/me`);
            return response.data;
        } catch (error) {
            console.error ("Error getting applications", error);
            throw error;
        }
    };


export default {getAllApplications, applyToProject, cancelApplication, getMyApllications}