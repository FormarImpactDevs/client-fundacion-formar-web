/* import { useState, useContext } from "react";
import "./_productsEcommerce.scss";
import { Button, Tooltip } from "@mui/material";
import { ProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCartPlus } from "@fortawesome/free-solid-svg-icons";
function ProductsEcommerce() {
  const { products, productsFiltered, searchProducts, productsReady } =
    useContext(ProductContext);
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

  return (
    <div>
      <h1 className="title">Productos</h1>
      <div className="product-container">
        <div className="product-grid">
          {productsReady &&
            (searchProducts.length > 0
              ? searchProducts
              : productsFiltered.length > 0
              ? productsFiltered
              : products
            ).map((producto) => (
              <div className="product-card" key={producto.id}>
                <figure className="imageCardProduct">
                  <img
                    src={producto.images[0]?.imagen}
                    alt={`Imagen de ${producto.nombre}`}
                    className="product-image"
                    onClick={() =>
                      mostrarImagenAmpliada(producto.images[0]?.imagen)
                    }
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
}

export default ProductsEcommerce;

ProductsEcommerce.propTypes = {
  emprendimientoId: PropTypes.number,
};
 */
import { useState, useContext } from "react";
import "./_productsEcommerce.scss";
import { Button, Tooltip } from "@mui/material";
import { ProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCartPlus } from "@fortawesome/free-solid-svg-icons";

function ProductsEcommerce() {
  const { products, productsFiltered, searchProducts, productsReady } =
    useContext(ProductContext);
  const { dispatch } = useCart();
  const [imagenAmpliadaVisible, setImagenAmpliadaVisible] = useState(false);
  const [imagenAmpliadaSrc, setImagenAmpliadaSrc] = useState("");

  const mostrarImagenAmpliada = (imagen) => {
    setImagenAmpliadaSrc(imagen);
    setImagenAmpliadaVisible(true);
  };

  const cerrarImagenAmpliada = () => setImagenAmpliadaVisible(false);

  const agregarAlCarrito = (producto) => {
    dispatch({
      type: "AGREGAR_PRODUCTO",
      payload: { ...producto, quantity: 1 },
    });
  };

  const productosAmostrar = searchProducts.length > 0
    ? searchProducts
    : productsFiltered.length > 0
    ? productsFiltered
    : products;

  return (
    <div>
      <h1 className="title">Productos</h1>
      <div className="product-container">
        <div className="product-grid">
          {productsReady &&
            productosAmostrar.map((producto) => (
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
      {imagenAmpliadaVisible && (
        <div
          id="imagenAmpliada"
          className="imagen-ampliada"
        >
          <img
            src={imagenAmpliadaSrc}
            alt="Imagen ampliada del producto"
            className="ampliada-image"
          />
          <span className="cerrar-x" onClick={cerrarImagenAmpliada}>
            X
          </span>
        </div>
      )}
    </div>
  );
}

export default ProductsEcommerce;
