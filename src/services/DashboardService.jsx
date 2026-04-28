import axios from "axios";
import api from './api';

const url = "/api/v1/dashboard";

const DashboardService = {   

    getDashboardKpis: async(year, month) => {
        try {
            const response = await api.get(`${url}/kpis`, {params: { year, month }});
            return response.data;
        } catch (error) {
            console.error("Error al cargas las KPI", error);
            throw error;
        }
    },

    getProjectsByCategory: async(year, month) => {
        try {
            const response = await api.get(`${url}/projectsbycategory`, {params: { year, month }});
            return response.data;
        } catch (error) {
            console.error("Error al cargar las métricas por Categoría", error);
            throw error;
        }
    },

    getParticipationFunnel: async(year, month) => {
        try {
           const response = await api.get(`${url}/participationfunnel`, {params: { year, month }});
           return response.data;
        } catch (error) {
            console.error("Error al cargar las métricas de interés y participación.", error);
            throw error; 
        }
    },

    getMonthlyEvolution: async(year) => {
        try {
           const response = await api.get(`${url}/monthlyevolution`, {params: { year }});
           return response.data;
        } catch (error) {
            console.error("Error al cargar las métricas evolución por año.", error);
            throw error; 
        }
    },

    getYearlyComparison: async(year) => {
        try {
           const response = await api.get(`${url}/yearlycomparison`, {params: { year }});
           return response.data;
        } catch (error) {
            console.error("Error al cargar las métricas comparativas interanual.", error);
            throw error; 
        }
    },

    getGnoContributions: async(year, month) => {
        try {
           const response = await api.get(`${url}/gnocontributions`, {params: { year }});
           return response.data;
        } catch (error) {
            console.error("Error al cargar las métricas de contribución de las ONG.", error);
            throw error; 
        }
    },

}

export default DashboardService;