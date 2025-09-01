import "../_productsEcommerce.scss";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Tooltip } from "@mui/material";
import { useCart } from "../../../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCartPlus } from "@fortawesome/free-solid-svg-icons";

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
                <figure className="imageCardProduct">
                  <img
                    src={producto.images[0]?.imagen}
                    alt={`Imagen de ${producto.nombre}`}
                    className="product-image"
                    onClick={() => mostrarImagenAmpliada(producto.images[0]?.imagen)}
                  />
                </figure>
                <div className="product-info">
                  <h2 className="product-title">
                    {producto.nombre.slice(0, 30)}
                  </h2>
                  <p className="product-description">
                    {producto.descripcion.slice(0, 50)}
                  </p>
                  <p className="product-price">${producto.precio}</p>                 
                  <div>
                    <Tooltip title="Agregar al carrito" arrow>
                      <Button
                        variant="outlined"
                        className="mx-4"
                        size="medium"
                        color="secondary"
                        onClick={() => agregarAlCarrito(producto)}
                        sx={{ height: "40px" }}
                      >
                        <FontAwesomeIcon icon={faCartPlus} fontSize={"22px"} />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Ver detalle" arrow>
                      <Button
                        variant="outlined"
                        size="medium"
                        className="mx-4"
                        color="secondary"
                        sx={{ height: "40px" }}
                      >
                        <Link to={`/producto/${producto.id}`}>
                          <FontAwesomeIcon icon={faEye} fontSize={"22px"} />
                        </Link>
                      </Button>
                    </Tooltip>
                  </div>
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
