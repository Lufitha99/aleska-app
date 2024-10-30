import api from '../axiosConfig';

// Llamada para obtener todas las categorías
export const getAllCategories = async () => {
  const response = await api.get('/products/categories');
  return response.data;
};
