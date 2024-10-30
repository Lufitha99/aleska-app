import api from '../axiosConfig';

// Llamada para obtener todos los productos
export const getAllProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

// Llamada para obtener un producto según ID
export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

// Llamada para obtener productos según categoría
export const getProductsByCategory = async (category) => {
  const response = await api.get(`/products/category/${category}`);
  return response.data;
};

export const addProduct = async (newProduct) => {
    const response = await api.post('/products', newProduct);
    return response.data;
  };