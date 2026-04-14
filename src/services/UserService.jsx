import api from "./api";

    const url = "/api/v1";

        const login = async (credentials) => {
        try {
        const response = await api.post(`${url}/auth/login`, credentials);
        const token = response.data.token;
        localStorage.setItem("token", token);
        return response.data;
        } catch (error) {
        console.error("Login error:", error.response?.data);
        throw error;
        }
    };

    const getEmployeeById = async(id) =>{
        try{
            const response = await api.get(`${url}/admin/employees/${id}`); 

        } catch (error) {
            console.error ("Error para obtener datos del usuario", error);
            throw error;
        }
    };

    const getAllEmployees = async(id) =>{
        try{
            const response = await api.get(`${url}/admin/employees`); 

        } catch (error) {
            console.error ("Error para obtener datos de los usuarios", error);
            throw error;
        }
    };

    const getOngsById = async(id) =>{
        try{
            const response = await api.get(`${url}/admin/gnos/${id}`);
            return response.data;
            
        } catch (error) {
            console.error ("Error para obtrener datos de la ong", error);
            throw error;
        }
    };

    const getAllOngs = async(id) =>{
        try{
            const response = await api.get(`${url}/admin/gnos`); 

        } catch (error) {
            console.error ("Error para obtener datos de las ongs", error);
            throw error;
        }
    };

    const getMyOngProfile = async(id) =>{
        try{
            const response = await api.get(`${url}/gnos/profile`); 

        } catch (error) {
            console.error ("Error para obtener datos de su perfil", error);
            throw error;
        }
    };

    const getMyEmployeeProfile = async(id) =>{
        try{
            const response = await api.get(`${url}/employees/profile `); 

        } catch (error) {
            console.error ("Error para obtener datos de su perfil", error);
            throw error;
        }
    };



    // READY FOR WHEN WE WANT TO IMPLEMENT ONG CREATION/DELETION

    // const createOngProfile = async(userData) => {
    //     try{
    //         const response = await api.post(`${url}/admin/gnos`, userData);
    //         return response.data;
    //     }catch (error) {
    //         console.error ("Error creating user", error);
    //         throw error;
    //     }
    // };

    // const deleteOngProfile = async (id) => {
    //     try {
    //         const response = await api.delete(`${url}/admin/gnos/${id}`);
    //         return response.data;
    //     } catch (error) {
    //         console.error("Error deleting user", error);
    //         throw error;
    //     }
    // };

//     const updateUser = async (id, userData) => {
//         try {
//             const response = await api.put(`${url}/admin/ongs/${id}`, userData);
//         return response.data;
//     } catch (error) {
//         console.error("Error updating user", error);
//         throw error;
//     }
// };

export default {login, getEmployeeById, getAllEmployees, getOngsById, getAllOngs, getMyOngProfile  };