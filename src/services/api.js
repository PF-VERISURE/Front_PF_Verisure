import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response, 
    (error) => {
        if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
        ) {
            localStorage.removeItem("token");
            // localStorage.removeItem("userData");
            alert("Tu sesión ha expirado. Por favor, vuelve a entrar.");
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
);

export default api;