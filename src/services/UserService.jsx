import axios from "axios";
import api from "./api";

    const url = "/api/v1";

    //LOGIN
    //     const login = async (credentials) => {
    //     try {
    //     const response = await axios.post(`http://localhost:8080/api/v1/auth/login`, credentials);
    //     // const token = response.data.token;
    //     // localStorage.setItem("token", token);
    //     return response;
    //     } catch (error) {
    //     console.error("Login error:", error.response?.data);
    //     throw error;
    //     }
    // };

    const login = async (credentials) => {
    const response = await axios.post("http://localhost:8080/api/v1/auth/login", credentials);

    const token =
        response.headers?.get?.("authorization") ||
        response.headers?.authorization ||
        response.headers?.Authorization;

    if (!token) {
        throw new Error("Token not found");
    }

    localStorage.setItem("token", token.replace("Bearer ", ""));

    return response.data;
    };

    //EMPLOYEES

    const getEmployeeById = async(id) =>{
        try{
            const response = await api.get(`${url}/employees/${id}`);
            return response.data;
        } catch (error) {
            console.error ("Error para obtener datos del usuario", error);
            throw error;
        }
    };

    const getAllEmployees = async() =>{
        try{
            const response = await api.get(`${url}/employees`);
            return response.data;
        } catch (error) {
            console.error ("Error para obtener datos de los usuarios", error);
            throw error;
        }
    };

        const getMyEmployeeProfile = async(id) =>{
        try{
            const response = await api.get(`${url}/employees/profile`);
            return response.data;
        } catch (error) {
            console.error ("Error para obtener datos de su perfil", error);
            throw error;
        }
    };

    //ONGs

    const getOngsById = async(id) =>{
        try{
            const response = await api.get(`${url}/gnos/${id}`);
            return response.data;
            
        } catch (error) {
            console.error ("Error para obtrener datos de la ong", error);
            throw error;
        }
    };

    const getAllOngs = async() =>{
        try{
            const response = await api.get(`${url}/gnos`);
            return response.data;
        } catch (error) {
            console.error ("Error para obtener datos de las ongs", error);
            throw error;
        }
    };

    const getMyOngProfile = async(id) =>{
        try{
            const response = await api.get(`${url}/gnos/profile`);
            return response.data;
        } catch (error) {
            console.error ("Error para obtener datos de su perfil", error);
            throw error;
        }
    };

    const createOngProfile = async(userData) => {
        try{
            const response = await api.post(`${url}/gnos`, userData);
            return response.data;
        }catch (error) {
            console.error ("Error creating user", error);
            throw error;
        }
    };

    const deleteOngProfile = async (id) => {
        try {
            const response = await api.delete(`${url}/gnos/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting user", error);
            throw error;
        }
    };

    //SDGs
    const getAllSdgs = async(id) =>{
        try{
            const response = await api.get(`${url}/sdgs`);
            return response.data;
        } catch (error) {
            console.error ("Error para obtener categorias", error);
            throw error;
        }
    };

    const getSdgsById = async(id) =>{
        try{
            const response = await api.get(`${url}/sdgs/${id}`);
            return response.data;
            
        } catch (error) {
            console.error ("Error para obtrener datos de la ong", error);
            throw error;
        }
    };

//     const updateUser = async (id, userData) => {
//         try {
//             const response = await api.put(`${url}/admin/ongs/${id}`, userData);
//         return response.data;
//     } catch (error) {
//         console.error("Error updating user", error);
//         throw error;
//     }
// };

export default {login, getEmployeeById, getAllEmployees, getOngsById, getAllOngs, getAllSdgs , deleteOngProfile,  createOngProfile,  getMyOngProfile, getMyEmployeeProfile  };