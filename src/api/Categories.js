import api from '../axiosConfig';

// Llamada para obtener todas las categorías
// api/Categories.js
export const getAllCategories = async () => {
  const response = await api.get('/products/categories');
  console.log('Categorías obtenidas:', response.data); // Agrega esto
  return response.data;
};
