/* getOrdersService */import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

export const getOrdersService = async () => {
  try {
    const url = `${apiUrl}orders`;
    /* const url = 'http://localhost:3000/api/orders'; */
    const { data } = await axios.get(url);
    console.log(data);
    
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
    console.log(orderData , orderNumber);
  try {
    const url = `${apiUrl}orders/update/${orderNumber}`;
    /* /update/:orderNumber */
    const { data } = await axios.put(url, orderData);
    console.log(data);
    return data || [];
  } catch (error) {
    console.error(error.message);
  }
};

