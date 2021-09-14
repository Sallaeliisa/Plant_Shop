import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const getAll = async () => {
    const response = await axios.get(baseUrl + '/products');
    return response.data;
};