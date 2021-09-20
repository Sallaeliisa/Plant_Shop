import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const getAll = async () => {
    const response = await axios.get(baseUrl + '/products');
    return response.data;
};

export const getCart = async () => {
    const response = await axios.get(baseUrl + '/cart');
    return response.data;
}