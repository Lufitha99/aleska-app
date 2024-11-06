import api from '../axiosConfig';


export const getAllProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};


export const getProductsByCategory = async (category) => {
  try {
    const response = await api.get(`/products/category/${category}`);
    console.log(`Respuesta de la API para la categoría ${category}:`, response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener productos por categoría:', error);
    return [];
  }
};

export const addProduct = async (newProduct) => {
    const response = await api.post('/products', newProduct);
    return response.data;
  };