import axios from "axios";
import api from './api';

const ProjectService =() =>{
    const url = "/api/v1/projects";

    const createProject= async (formData) => {
        try{
            const response = await api.post(url, formData);
            return response.data;
        } catch(error){
            console.error ("Error creating new project", error);
            throw error;
        }
    };

        const getPendingProjects = async(id) =>{
        try{
            const response = await api.get(`${url}/pending`);
            return response.data;
        } catch (error) {
            console.error ("Error to obtains project details", error);
            throw error;
        }
    };

    const getPublishedProjects = async() =>{
        try{
        const res = await api.get(`${url}/published`);
        return res.data.data;
            }
            catch (error) {
                console.error ("Error getting projects", error);
                throw error;
            }
        }
    

        const getOngProjects = async() =>{
        try{
        const res = await api.get(`${url}/my-projects`);
        return res.data.data;
            }
            catch (error) {
                console.error ("Error getting projects", error);
                throw error;
            }
        }

    const updateProjectStatus = async (id, status) => {
        try {
            const response = await api.patch(`${url}/${id}/status`, { status });
            return response.data;
        } catch (error) {
            console.error("Error al actualizar estado del proyecto", error);
            throw error;
        }
        
    };

    const getAllProjects = async () => {
        try {
            const res = await api.get(`${url}/all`);
            return res.data.data;
        } catch (error) {
            console.error("Error getti//ng all projects", error);
            throw error;
        }
    };

    const toggleFavorite = async (projectId) => {
    try {
        const response = await api.post(`${url}/${projectId}/favorite`);
        return response.data;
    } catch (error) {
        console.error("Error toggling favorite", error);
        throw error;
    }
    };

return {createProject, getPendingProjects, getPublishedProjects, updateProjectStatus, getOngProjects, getAllProjects, toggleFavorite}

 }

export default ProjectService;