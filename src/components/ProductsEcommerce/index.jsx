import { useState, useContext, useEffect } from "react";
import "./_productsEcommerce.scss";
import Button from "@mui/material/Button";
import { ProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import PropTypes from "prop-types";

function ProductsEcommerce({ emprendimientoId }) {
  const { products, productsFiltered, searchProducts, productsReady } =
    useContext(ProductContext);
  const { dispatch } = useCart();
  const [productOfEnterprise, setProductOfEnterprise] = useState([]);
  const [imagenAmpliadaVisible, setImagenAmpliadaVisible] = useState(false);
  const [imagenAmpliadaSrc, setImagenAmpliadaSrc] = useState("");

  useEffect(() => {
    if (emprendimientoId) {
      const productosDelEmprendimiento = products.filter(
        (producto) => producto.emprendimientos_id === parseInt(emprendimientoId)
      );
      setProductOfEnterprise(productosDelEmprendimiento);
    }
  }, [emprendimientoId, products]);

  const mostrarImagenAmpliada = (imagen) => {
    setImagenAmpliadaSrc(imagen);
    setImagenAmpliadaVisible(true);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliadaVisible(false);
  };

  const agregarAlCarrito = (producto) => {
    dispatch({ type: "AGREGAR_PRODUCTO", payload: producto });
  };

  return (
    <div>
      <h1 className="title">
        {emprendimientoId ? "Conocé sus productos" : "Productos"}
      </h1>
      <div className="product-container">
        <div className="product-grid">
          {productsReady &&
            (emprendimientoId ? (
              productOfEnterprise.length > 0 ? (
                productOfEnterprise.map((producto) => (
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
                      {producto.descuento ? console.log(producto.descuento) (
                        
                        <div className="product-price">
                          <p className="discounted-price">
                            ${producto.precio - producto.descuento}
                          </p>{" "}
                          <del>${producto.precio}</del> 
                        </div>
                        
                      ) : (
                        <p className="product-price">${producto.precio}</p>
                      )}
                      <Button
                        size="small"
                        onClick={() => agregarAlCarrito(producto)}
                      >
                        Agregar al carrito
                      </Button>
                      <Link to={`/producto/${producto.id}`}>Detalle</Link>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="subtitle">
                  Lo sentimos, no se encontraron productos de este
                  emprendimiento
                </h1>
              )
            ) : (
              (searchProducts.length > 0
                ? searchProducts
                : productsFiltered.length > 0
                ? productsFiltered
                : products
              ).map((producto) => (
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
                    <p className="product-description">
                      {producto.descripcion}
                    </p>
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
              ))
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
