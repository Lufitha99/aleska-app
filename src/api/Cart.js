import api from '../axiosConfig';

// Llamada para obtener el carrito de un usuario según ID
export const getCartByUserId = async (userId) => {
  const response = await api.get(`/carts/user/${userId}`);
  return response.data;
};

// Llamada para agregar productos al carrito de un usuario
export const addToCart = async (userId, product) => {
  const response = await api.post(`/carts/user/${userId}`, product);
  return response.data;
};
