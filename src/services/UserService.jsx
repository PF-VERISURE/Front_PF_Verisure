import api from "./api";


const UserService =() =>{
    const url = "/api/v1";

        const login = async (credentials) => {
        try {
        const response = await api.post(`${url}/auth/login`, credentials);
        const token = response.data.token;
        localStorage.setItem("token", token);
        return response;

        } catch (error) {
        console.error("Login error", error);
        throw error;
        }
    };

    const getEmployeeProfile = async(id) =>{
        try{
            const response = await api.get(`${url}/users/me/employee/${id}`); //<= en la tabla de endpoints, este endpoint no tiene /id... esta OK ?
            return response.data;

        } catch (error) {
            console.error ("Error para obtener datos del usuario", error);
            throw error;
        }
    };

    const getOngsProfile = async(id) =>{
        try{
            const response = await api.get(`${url}/users/ongs/${id}`);
            return response.data;
            
        } catch (error) {
            console.error ("Error para obtrener datos de la ong", error);
            throw error;
        }
    };

    // READY FOR WHEN WE WANT TO IMPLEMENT ONG CREATION/DELETION

    // const createOngProfile = async(userData) => {
    //     try{
    //         const response = await api.post(`${url}/admin/ongs`, userData);
    //         return response.data;
    //     }catch (error) {
    //         console.error ("Error creating user", error);
    //         throw error;
    //     }
    // };

    // const deleteOngProfile = async (id) => {
    //     try {
    //         const response = await api.delete(`${url}/admin/ongs/${id}`);
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


return { getEmployeeProfile, getOngsProfile, login}
}

export default UserService;