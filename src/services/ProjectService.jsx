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


    const getAllProjects = async() =>{
        try{
        const res = await api.get("/projects/all");
        return res.data.data; // 👈 return clean array
            }
            catch (error) {
                console.error ("Error getting projects", error);
                throw error;
            }
        }

    // const getProjectById = async(id) =>{
    //     try{
    //         const response = await api.get(`${url}/${id}`);
    //         return response.data;
    //     } catch (error) {
    //         console.error ("Error to obtains project details", error);
    //         throw error;
    //     }
    // }

    // const updateProject = async (projectId, userData) => {
    // try {
    //     const response = await api.put(`${url}/${projectId}`,userData); 
    //     return response.data;
    //     } catch (error) {
    //     console.error("Error updating project", error);
    //     throw error;
    //     }
    // }

    // const deleteProject = async(projectId) => {
    //     try{
    //         const response = await api. delete(`${url}/${projectId}`);
    //         return response.data;
    //     } catch(error){
    //         console.error ("Error deleting project", error);
    //         throw error;
    //     }
    // }

    const getPublishedProjects = async () => {
        try {
            const response = await api.get(`${url}/published`);
            return response.data;
        } catch (error) {
            console.error("Error al obtener proyectos publicados", error);
            throw error;
        }
    };

    const updateProjectStatus = async (id, status) => {
        try {
            const response = await api.patch(`${url}/${id}/status`, { status });
            return response.data;
        } catch (error) {
            console.error("Error al actualizar estado del proyecto", error);
            throw error;
        }
    };

return {createProject, getPendingProjects, getAllProjects, getPublishedProjects, updateProjectStatus}

}

export default ProjectService;