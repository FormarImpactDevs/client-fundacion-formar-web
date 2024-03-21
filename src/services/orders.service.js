import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

export const getOrdersService = async () => {
  try {
    const url = `${apiUrl}orders`;
    const { data } = await axios.get(url);    
    return data || [];
  } catch (error) {
    console.error("Hubo un error al obtener los pedidos.");
  }
};

export const getOrderServiceByOrderNumber = async (orderNumber) => {
  try {
    const url = `${apiUrl}orders/${orderNumber}`;
    const { data } = await axios.get(url);
    return data || [];
  } catch (error) {
    console.error(error.message);
  }
};

export const updateOrderService = async (orderNumber, orderData) => {
  try {
    const url = `${apiUrl}orders/update/${orderNumber}`;
    const { data } = await axios.put(url, orderData);
    return data || [];
  } catch (error) {
    console.error(error.message);
  }
};

export const confirmOrderService = async (orderData) => {
  try {
    const url = `${apiUrl}orders`;
    const { data } = await axios.post(url, orderData);
    return data || {};
  } catch (error) {
    throw new Error("Error al confirmar la orden");
  }
};

