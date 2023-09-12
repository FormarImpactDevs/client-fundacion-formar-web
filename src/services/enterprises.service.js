import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

export const getEnterprisesService = async () => {
  try {
    const url = `${apiUrl}enterprises`;
    /* const url = 'http://localhost:3000/api/enterprises'; */
    const { data } = await axios.get(url);
    return data.data || [];
  } catch (error) {
    console.log(error);
    throw new Error("Hubo un error al obtener los emprendimientos.");
  }
};

export const createEnterpriseService = async (enterpriseData) => {
  console.log(enterpriseData);
  try {
    const url = `${apiUrl}enterprises/create`;
    const { data } = await axios.post(url, enterpriseData);
    return data.data || [];
  } catch (error) {
    console.log(error);
    throw new Error("Hubo un error al crear el emprendimiento.");
  }
};

export const updateEnterpriseService = async (enterpriseData) => {
  console.log(enterpriseData);
  try {
    const url = `${apiUrl}enterprises/update/${enterpriseData.id}`;
    const { data } = await axios.put(url, enterpriseData);
    return data.data || [];
  } catch (error) {
    console.log(error);
    throw new Error("Hubo un error al crear el emprendimiento.");
  }
};



export const deleteEnterpriseService = async (id) => {
  try {
    const url = `${apiUrl}enterprises/delete/${id}`;
    const { data } = await axios.delete(url);
    return data.message || [];
  } catch (error) {
    console.log(error);
    throw new Error("Hubo un error al eliminar el emprendimiento.");
  }
};
