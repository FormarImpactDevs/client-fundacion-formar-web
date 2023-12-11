import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useState } from "react";
import { confirmOrderService } from "../../services/orders.service";
import { useCart } from "../cartContext";

// Definición del contexto
const OrderContext = createContext();

// Acciones para la orden
const orderReducer = (state, action) => {
  switch (action.type) {
    case "CARGAR_DATOS_USUARIO":
      return {
        ...state,
        client_data: {
          ...state.client_data,
          ...action.payload,
        },
      };

    case "CARGAR_DATOS_DOMICILIO":
      return {
        ...state,
        client_data: {
          ...state.client_data,
          domicilio: {
            ...state.client_data.domicilio,
            ...action.payload,
          },
        },
      };

    case "CARGAR_TIPO_ENTREGA":
      return {
        ...state,
        tipo_de_entrega: action.payload,
      };

    case "CARGAR_PUNTO_DE_RETIRO":
      return {
        ...state,
        punto_retiro_id: action.payload,
      };
      
    case "CARGAR_PRODUCTOS":
      return {
        ...state,
        detalle_pedido: action.payload,
      };

    default:
      return state;
  }
};

// Función para obtener el estado y las acciones de la orden
export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder debe usarse dentro de un OrderProvider");
  }
  return context;
};

// Componente proveedor del contexto de la orden
export const OrderProvider = ({ children }) => {
  const { carritoState } = useCart()

  const initialState = {
    tipo_de_entrega: "",
    client_data: {
      firstName: "",
      mail: "",
      lastName: "",
      phone: "",
      dni: "",
      domicilio: {
        calle: "",
        numero: "",
        piso: "",
        depto: "",
        localidad: "",
        provincia: "",
      },
    },
    punto_retiro_id: 1,
    detalle_pedido: [],
  };

  const [ordenState, dispatch] = useReducer(orderReducer, initialState);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function displayModal() {
    setModalIsOpen(true);
  }

  function hideModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    dispatch({type: "CARGAR_PRODUCTOS", payload: carritoState.productos})
  }, [carritoState.productos])

  async function confirmOrder () {
    try {
      // Aquí puedes obtener los datos de orden del estado
      const orderData = ordenState; // Ejemplo: reemplaza por los datos de la orden a enviar

      const confirmedOrder = await confirmOrderService(orderData);

      // Aquí puedes manejar la respuesta o realizar otras acciones después de confirmar la orden

    } catch (error) {
      // Manejar errores en la confirmación de la orden
      console.error(error);
    }
  }

  // Efecto para persistir la orden en el storage
  useEffect(() => {
    // Lógica para guardar el estado de la orden en el storage
    localStorage.setItem("orden", JSON.stringify(ordenState));
  }, [ordenState]);

  // Recuperar el estado de la orden del storage al cargar la página
  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("orden"));
    if (savedOrder) {
      dispatch({ type: "CARGAR_ORDEN", payload: savedOrder });
    }
  }, []);

  return (
    <OrderContext.Provider
      value={{ ordenState, dispatch, modalIsOpen, displayModal, hideModal, confirmOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
};
