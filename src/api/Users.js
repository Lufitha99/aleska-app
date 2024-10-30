import api from '../axiosConfig';

// Llamada para obtener todos los usuarios
export const getAllUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

// Llamada para obtener un usuario por ID
export const getUserById = async (userId) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};

// Llamada para crear un nuevo usuario
export const createUser = async (userData) => {
  const response = await api.post('/users', userData);
  return response.data;
};

// Llamada para actualizar los datos de un usuario
export const updateUser = async (userId, userData) => {
  const response = await api.put(`/users/${userId}`, userData);
  return response.data;
};

// Llamada para eliminar un usuario
export const deleteUser = async (userId) => {
  const response = await api.delete(`/users/${userId}`);
  return response.data;
};
