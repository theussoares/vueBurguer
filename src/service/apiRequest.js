import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/'
});

export const getProducts = async () => {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar produtos da API');
  }
};