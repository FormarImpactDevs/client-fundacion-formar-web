import "../_productsEcommerce.scss";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useCart } from "../../../context/cartContext";

function ProductsOfEnterprise({ emprendimiento }) {
  const { dispatch } = useCart();
  const [imagenAmpliadaVisible, setImagenAmpliadaVisible] = useState(false);
  const [imagenAmpliadaSrc, setImagenAmpliadaSrc] = useState("");

  const mostrarImagenAmpliada = (imagen) => {
    setImagenAmpliadaSrc(imagen);
    setImagenAmpliadaVisible(true);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliadaVisible(false);
  };

  const agregarAlCarrito = (producto) => {
    dispatch({
      type: "AGREGAR_PRODUCTO",
      payload: { ...producto, quantity: 1 },
    });
  };

  if (emprendimiento.length !== 0) {
    return (
      <div>
        <h1 className="title">Conocé sus productos</h1>
        <div className="product-container">
          <div className="product-grid">
            {emprendimiento.map((producto) => (
              <div className="product-card" key={producto.id}>
                <img
                  src={producto.images[0]?.imagen}
                  alt={`Imagen de ${producto.nombre}`}
                  className="product-image"
                  onClick={() =>
                    mostrarImagenAmpliada(producto.images[0]?.imagen)
                  }
                />
                <div className="product-info">
                  <h2 className="product-title">{producto.nombre}</h2>
                  <p className="product-description">{producto.descripcion}</p>

                  <p className="product-price">${producto.precio}</p>

                  <Button
                    size="small"
                    onClick={() => agregarAlCarrito(producto)}
                  >
                    Agregar al carrito
                  </Button>
                  <Link to={`/producto/${producto.id}`}>Detalle</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id="imagenAmpliada"
          className="imagen-ampliada"
          style={{ display: imagenAmpliadaVisible ? "block" : "none" }}
        >
          <img
            src={imagenAmpliadaSrc}
            alt="Imagen ampliada del producto"
            id="imagenAmpliadaSrc"
            className="ampliada-image"
          />
          <span className="cerrar-x" onClick={() => cerrarImagenAmpliada()}>
            X
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <h1 className="subtitle">
        Lo sentimos, no se encontraron productos de este emprendimiento
      </h1>
    );
  }
}

export default ProductsOfEnterprise;

ProductsOfEnterprise.propTypes = {
  emprendimiento: PropTypes.array,
};
