import axios from 'axios';

const API_BASE_URL = 'https://h-services.onrender.com/api';

export const signup = async (data) => {
    return await axios.post(`${API_BASE_URL}/signup`, data);
};

export const signin = async (data) => {
    return await axios.post(`${API_BASE_URL}/signin`, data);
};

export const getUserName = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data.username;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};