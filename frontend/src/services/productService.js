import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // replace with the correct backend server URL
});

export const createProduct = async (productData) => {
  try {
    const response = await api.post('/products', productData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (productId, productData) => {
  try {
    const response = await api.put(`/products/${productId}`, productData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getProductInfo = async (productId) => {
  try {
    const response = await api.get(`/products/${productId}`);
    return response.data;
  } catch(error) {
    throw error;
  }
};