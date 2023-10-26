import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

export const getProductsService = async () => {
  try {
    const url = `${apiUrl}products`;
    const { data } = await axios.get(url);
    return data.data || [];
  } catch (error) {
    throw new Error("Hubo un error al obtener los productos.");
  }
};

export const getProductServiceById = async (idProduct) => {
  try {
    const url = `${apiUrl}products/${idProduct}`;
    const { data } = await axios.get(url);
    return data.data || [];
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createProductService = async (productData) => {
  console.log(productData);
  try {
    const url = `${apiUrl}products/create`;
    const { data } = await axios.post(url, productData);
    return data.data || [];
  } catch (error) {
    throw new Error(error.response.data.message);
    
  }
};

export const updateProductService = async (id, productData) => {
  try {
    const url = `${apiUrl}products/update/${id}`;
    const { data } = await axios.put(url, productData);
    return data.data || [];
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};



export const deleteProductService = async (id) => {
  try {
    const url = `${apiUrl}products/delete/${id}`;
    const { data } = await axios.delete(url);
    return data.message || [];
  } catch (error) {
    throw new Error("Hubo un error al eliminar el producto.", error.response.data.message);
  }
};
