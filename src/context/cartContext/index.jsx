
import { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

// Definición del contexto
const CartContext = createContext();

// Acciones del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_PRODUCTO": {
      const productoAAgregar = action.payload;
      const existeProducto = state.productos.find(
        (item) => item.id === productoAAgregar.id
      );
      if (existeProducto) {
        return {
          ...state,
          productos: state.productos.map((item) =>
            item.id === productoAAgregar.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          productos: [
            ...state.productos,
            { ...productoAAgregar, quantity: action.payload.quantity },
          ],
        };
      }
    }
    case "CAMBIAR_CANTIDAD": {
      const { itemId, newQuantity } = action.payload;
      return {
        ...state,
        productos: state.productos.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        ),
      };
    }
    case "QUITAR_PRODUCTO": {
      const idQuitar = action.payload;
      return {
        ...state,
        productos: state.productos.filter((item) => item.id !== idQuitar),
      };
    }
    case "VACIAR_CARRITO": {
      return {
        ...state,
        productos: [],
      };
    }
    case "CARGAR_CARRITO": {
      return action.payload;
    }
    default:
      return state;
  }
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const initialState = {
    productos: [],
  };

  const [carritoState, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const carritoPersistido = localStorage.getItem("carrito");
    if (carritoPersistido) {
      dispatch({
        type: "CARGAR_CARRITO",
        payload: JSON.parse(carritoPersistido),
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carritoState));
  }, [carritoState]);

  return (
    <CartContext.Provider value={{ carritoState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/* import { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

// Definición del contexto
const CartContext = createContext();

// Acciones del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_PRODUCTO": {
      const productoAAgregar = action.payload;
      const existeProducto = state.productos.find(
        (item) => item.id === productoAAgregar.id
      );
      if (existeProducto) {
        return {
          ...state,
          productos: state.productos.map((item) =>
            item.id === productoAAgregar.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          productos: [
            ...state.productos,
            { ...productoAAgregar, quantity: action.payload.quantity },
          ],
        };
      }
    }

    case "CAMBIAR_CANTIDAD": {
      const { itemId, newQuantity } = action.payload;
      return {
        ...state,
        productos: state.productos.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        ),
      };
    }

    case "QUITAR_PRODUCTO": {
      const idQuitar = action.payload;
      return {
        ...state,
        productos: state.productos.filter((item) => item.id !== idQuitar),
      };
    }

    case "VACIAR_CARRITO": {
      return {
        ...state,
        productos: [],
      };
    }

    case "CARGAR_CARRITO": {
      return { ...state, productos: action.payload || [] };
    }

    default:
      return state;
  }
};

// Función para obtener el estado y las acciones del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

// Componente proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const initialState = {
    productos: [],
  };

  const [carritoState, dispatch] = useReducer(cartReducer, initialState);

  // Efecto para persistir el carrito en las cookies
  useEffect(() => {
    console.log("Guardando carrito en cookies:", carritoState);
    Cookies.set("carrito", JSON.stringify(carritoState.productos), { expires: 7 });
  }, [carritoState]);

  // Lógica para recuperar el estado del carrito de las cookies al cargar la página
  useEffect(() => {
    const carritoPersistido = Cookies.get("carrito");
    if (carritoPersistido) {
      console.log("Cargando carrito desde cookies:", carritoPersistido);
      dispatch({
        type: "CARGAR_CARRITO",
        payload: JSON.parse(carritoPersistido),
      });
    } else {
      console.log("No se encontró carrito persistido.");
    }
  }, []);

  return (
    <CartContext.Provider value={{ carritoState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}; */



/* import { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
// Definición del contexto
const CartContext = createContext();

// Acciones del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_PRODUCTO": {
      const productoAAgregar = action.payload;
      // Verificar si el producto ya está en el carrito
      const existeProducto = state.productos.find(
        (item) => item.id === productoAAgregar.id
      );
      if (existeProducto) {
        return {
          ...state,
          productos: state.productos.map((item) =>
            item.id === productoAAgregar.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          productos: [
            ...state.productos,
            { ...productoAAgregar, quantity: action.payload.quantity },
          ],
        };
      }
    }

    case "CAMBIAR_CANTIDAD": {
      // Lógica para incrementar la cantidad de un producto en el carrito
      const { itemId, newQuantity } = action.payload;
      return {
        ...state,
        productos: state.productos.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        ),
      };
    }

    case "QUITAR_PRODUCTO": {
      // Lógica para quitar un producto del carrito
      const idQuitar = action.payload;
      return {
        ...state,
        productos: state.productos.filter((item) => item.id !== idQuitar),
      };
    }

    case "VACIAR_CARRITO": {
      // Lógica para vaciar el carrito por completo
      return {
        ...state,
        productos: [],
      };
    }

    case "CARGAR_CARRITO": {
      // Lógica para cargar el carrito desde el almacenamiento
      return action.payload;
    }

    default:
      return state;
  }
};

// Función para obtener el estado y las acciones del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCarrito debe usarse dentro de un CarritoProvider");
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
    localStorage.setItem("carrito", JSON.stringify(carritoState));
  }, [carritoState]);

  // Lógica para recuperar el estado del carrito del storage al cargar la página
  useEffect(() => {
    const carritoPersistido = localStorage.getItem("carrito");
    if (carritoPersistido) {
      dispatch({
        type: "CARGAR_CARRITO",
        payload: JSON.parse(carritoPersistido),
      });
    }
  }, []);


  return (
    <CartContext.Provider value={{ carritoState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
 */

