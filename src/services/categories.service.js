import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

export const getCategoriesService = async () => {
  try {
    const url = `${apiUrl}category`;
    const { data } = await axios.get(url);
    return data || [];
  } catch (error) {
    throw new Error("Hubo un error al obtener las categorias.");
  }
};

export const createCategoryService = async (categoryData) => {
  try {
    const url = `${apiUrl}category/create`;
    const { data } = await axios.post(url, categoryData);
    return data || [];
  } catch (error) {
    throw new Error("Hubo un error al crear la categoría.");
  }
};

export const updateCategoriesService = async (id, categoryData) => {
  try {
    const url = `${apiUrl}category/update/${id}`;
    const { data } = await axios.put(url, categoryData);
    return data || [];
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteCategoryService = async (categoryId, categoryProducts) => {
  try {
    const url = `${apiUrl}category/delete/${categoryId}/${categoryProducts}`;
    const { data } = await axios.delete(url);
    return data || [];
  } catch (error) {
    throw new Error("Hubo un error al eliminar la categoría.");
  }
};

export const getCategoryServiceById = async (idCategory) => {
  try {
    const url = `${apiUrl}category/${idCategory}`;
    const { data } = await axios.get(url);
    return data.data || [];
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
