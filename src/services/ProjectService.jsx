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

return {createProject, getPendingProjects,  getPublishedProjects, getOngProjects }

}

export default ProjectService;