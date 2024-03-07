import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

export const getProductsService = async () => {
  try {
    const url = `${apiUrl}product`;
    const { data } = await axios.get(url);
    return data || [];
  } catch (error) {
    throw new Error("Hubo un error al obtener los productos.");
  }
};

export const getProductServiceById = async (idProduct) => {
  try {
    const url = `${apiUrl}product/${idProduct}`;
    const  data = await axios.get(url);
    console.log(data + "servicio");
    return data.data || [];
  } catch (error) {
    throw new Error(error);
  }
};

export const createProductservice = async (productData) => {
  console.log(productData);
  try {
    const url = `${apiUrl}product/create`;
    const { data } = await axios.post(url, productData);
    return data.data || [];
  } catch (error) {
    throw new Error(error/* .response.data.message */);
    
  }
};

export const updateProductservice = async (id, productData) => {
  try {
    const url = `${apiUrl}product/update/${id}`;
    const { data } = await axios.put(url, productData);
    return data.data || [];
  } catch (error) {
    throw new Error(error/* .response.data.message */);
  }
};



export const deleteProductservice = async (id) => {
  try {
    const url = `${apiUrl}product/delete/${id}`;
    const { data } = await axios.delete(url);
    return data.message || [];
  } catch (error) {
    throw new Error("Hubo un error al eliminar el emprendimiento.", error);
  }
};
