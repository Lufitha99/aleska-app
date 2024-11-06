import api from '../axiosConfig';

export const getCartByUserId = async (userId) => {
  const response = await api.get(`/carts/user/${userId}`);
  return response.data;
};

export const addToCart = async (userId, product) => {
  const response = await api.post(`/carts/user/${userId}`, product);
  return response.data;
};
