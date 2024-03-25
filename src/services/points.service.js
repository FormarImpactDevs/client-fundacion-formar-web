import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

export const getPointsService = async () => {
  try {
    const url = `${apiUrl}point`;
    const { data } = await axios.get(url);
    return data.data || [];
  } catch (error) {
    throw new Error("Hubo un error al obtener los puntos de retiro.");
  }
};

export const getPointServiceById = async (idPoint) => {
  try {
    const url = `${apiUrl}point/${idPoint}`;
    const { data } = await axios.get(url);
    return data.data || [];
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createPointService = async (pointData) => {
  try {
    const url = `${apiUrl}point/create`;
    const { data } = await axios.post(url, pointData);
    return data.data || [];
  } catch (error) {
    throw new Error(error.response.data.message);
    
  }
};

export const updatePointService = async (pointData) => {
  try {
    const url = `${apiUrl}point/update/${pointData.id}`;
    const { data } = await axios.put(url, pointData);
    return data.data || [];
  } catch (error) {
    throw new Error(error);
  }
};



export const deletePointService = async (id) => {
  try {
    const url = `${apiUrl}point/delete/${id}`;
    const { data } = await axios.delete(url);
    return data.message || [];
  } catch (error) {
    throw new Error("Hubo un error al eliminar el punto de retiro.", error.response.data.message);
  }
};
