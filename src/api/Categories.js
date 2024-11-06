import api from '../axiosConfig';

export const getAllCategories = async () => {
  const response = await api.get('/products/categories');
  console.log('Categorías obtenidas:', response.data); 
};
