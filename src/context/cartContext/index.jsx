// CarritoContext.js

import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Definición del contexto
const CartContext = createContext();

// Acciones del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR_PRODUCTO':
      // Lógica para agregar productos al carrito
      const productoAAgregar = action.payload;
      // Verificar si el producto ya está en el carrito
      const existeProducto = state.productos.find(item => item.id === productoAAgregar.id);
      if (existeProducto) {
        return {
          ...state,
          productos: state.productos.map(item =>
            item.id === productoAAgregar.id ? { ...item, cantidad: item.cantidad + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          productos: [...state.productos, { ...productoAAgregar, cantidad: 1 }],
        };
      }

    case 'INCREMENTAR_CANTIDAD':
      // Lógica para incrementar la cantidad de un producto en el carrito
      const idIncrementar = action.payload;
      return {
        ...state,
        productos: state.productos.map(item =>
          item.id === idIncrementar ? { ...item, cantidad: item.cantidad + 1 } : item
        ),
      };

    case 'DECREMENTAR_CANTIDAD':
      // Lógica para decrementar la cantidad de un producto en el carrito
      const idDecrementar = action.payload;
      return {
        ...state,
        productos: state.productos.map(item =>
          item.id === idDecrementar ? { ...item, cantidad: item.cantidad - 1 } : item
        ),
      };

    case 'QUITAR_PRODUCTO':
      // Lógica para quitar un producto del carrito
      const idQuitar = action.payload;
      return {
        ...state,
        productos: state.productos.filter(item => item.id !== idQuitar),
      };

    case 'VACIAR_CARRITO':
      // Lógica para vaciar el carrito por completo
      return {
        ...state,
        productos: [],
      };

    default:
      return state;
  }
};

// Función para obtener el estado y las acciones del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCarrito debe usarse dentro de un CarritoProvider');
  }
  return context;
};

// Componente proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const initialState = {
    productos: [], // Array de productos en el carrito
  };

  const [carritoState, dispatch] = useReducer(cartReducer, initialState);

  // Efecto para persistir el carrito en el storage
  useEffect(() => {
    // Lógica para guardar el estado del carrito en el storage
    localStorage.setItem('carrito', JSON.stringify(carritoState));

    // Lógica para recuperar el estado del carrito del storage al cargar la página
    const carritoPersistido = localStorage.getItem('carrito');
    if (carritoPersistido) {
      dispatch({ type: 'CARGAR_CARRITO', payload: JSON.parse(carritoPersistido) });
    }
  }, [carritoState]);

  return (
    <CartContext.Provider value={{ carritoState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
