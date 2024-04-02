import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

export const getEnterprisesService = async () => {
  try {
    const url = `${apiUrl}enterprises`;
    const { data } = await axios.get(url);
    return data.data || [];
  } catch (error) {
    throw new Error("Hubo un error al obtener los emprendimientos.");
  }
};

export const getEnterpriseServiceById = async (idEnterprise) => {
  try {
    const url = `${apiUrl}enterprises/${idEnterprise}`;
    const { data } = await axios.get(url);
    return data.data || [];
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createEnterpriseService = async (enterpriseData) => {
  try {
    const url = `${apiUrl}enterprises/create`;
    const { data } = await axios.post(url, enterpriseData);
    return data.data || [];
  } catch (error) {
    throw new Error(error.response.data.message);
    
  }
};

export const updateEnterpriseService = async (id, enterpriseData) => {
  try {
    const url = `${apiUrl}enterprises/update/${id}`;
    const { data } = await axios.put(url, enterpriseData);
    return data.data || [];
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};



export const deleteEnterpriseService = async (id) => {
  try {
    const url = `${apiUrl}enterprises/delete/${id}`;
    const { data } = await axios.delete(url);
    return data || [];
  } catch (error) {
    throw new Error("Hubo un error al eliminar el emprendimiento.", error.response.data.message);
  }
};
