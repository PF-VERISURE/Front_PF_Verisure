import axios from "axios";
import api from './api';

const url = "/api/v1/dashboard";

const DashboardService = {   

    getProjectsByCategory: async(year, month) => {
        try {
            const response = await api.get(`${url}/projectsbycategory`, {params: { year, month }});
            return response.data;
        } catch (error) {
            console.error("Error al cargar las métricas por Categoría", error);
            throw error;
        }
    },

    // getApplicationsByCategory: async(year, month) => {
    //     try {
    //        const response = await api.get(`${url}/applicationsbycategory`, {params: { year, month }});
    //        return response.data;
    //     } catch (error) {
    //         console.error("Error al cargas las métricas por aplicaciones a proyectos", error);
    //         throw error; 
    //     }
    // },

    getDashboardKpis: async(year, month) => {
        try {
            const response = await api.get(`${url}/kpis`, {params: { year, month }});
            return response.data;
        } catch (error) {
            console.error("Error al cargas las KPI", error);
            throw error;
        }
    }
}

export default DashboardService;