import api from "./api";

const CertificateService = () => {
    const url = "/api/v1/participation";

    const getCertificateById = async (id) => {
        try {
        const response = await api.get(`${url}/certificate/${id}`);
        return response.data;
        } catch (error) {
        console.error("Error fetching certificate by id", error);
        throw error;
        }
    };

    const getMyCertificates = async () => {
        try {
        const response = await api.get(`${url}/certificates`);
        return response.data;
        } catch (error) {
        console.error("Error fetching certificates", error);
        throw error;
        }
    };

    return {
        getCertificateById,
        getMyCertificates,
    };
};

export default CertificateService;
