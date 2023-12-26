import { useState, useContext } from "react";
import "./_productsEcommerce.scss";
import Button from "@mui/material/Button";
import { ProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";

function ProductsEcommerce() {
  const { products, productsFiltered, searchProducts, productsReady } =
    useContext(ProductContext);

  const [imagenAmpliadaVisible, setImagenAmpliadaVisible] = useState(false);
  const [imagenAmpliadaSrc, setImagenAmpliadaSrc] = useState("");

  const { dispatch } = useCart();
  const mostrarImagenAmpliada = (imagen) => {
    setImagenAmpliadaSrc(imagen);
    setImagenAmpliadaVisible(true);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliadaVisible(false);
  };

  function agregarAlCarrito (producto) {
    dispatch({ type: 'AGREGAR_PRODUCTO', payload: producto });
  }

  return (
    <div>
      <h1 className="title">Productos</h1>
      <div className="product-container">
        <div className="product-grid">
          {productsReady ? (
            <>
              {searchProducts.length > 0 ? (
                searchProducts.map((producto) => (
                  <div className="product-card" key={producto.id}>
                    <img
                      src={producto.images[0]?.imagen}
                      alt={`Imagen de ${producto.nombre}`}
                      className="product-image"
                      onClick={() => mostrarImagenAmpliada(producto.images[0]?.imagen)}
                    />

                    <div className="product-info">
                      <h2 className="product-title">{producto.nombre}</h2>
                      <p className="product-description">
                        {producto.descripcion}
                      </p>
                      <p className="product-price">${producto.precio}</p>
                      <Button size="small" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</Button>
                      <Link to={`/producto/${producto.id}`}>Detalle</Link>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  {productsFiltered.length > 0
                    ? productsFiltered.map((producto) => (
                        <div className="product-card" key={producto.id}>
                          <img
                            src={producto.images[0]?.imagen}
                            alt={`Imagen de ${producto.nombre}`}
                            className="product-image"
                            onClick={() =>
                              mostrarImagenAmpliada(
                                producto.images[0]?.imagen
                              )
                            }
                          />

                          <div className="product-info">
                            <h2 className="product-title">{producto.nombre}</h2>
                            <p className="product-description">
                              {producto.descripcion}
                            </p>
                            <p className="product-price">${producto.precio}</p>
                            <Button size="small" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</Button>
                            <Link to={`/producto/${producto.id}`}>Detalle</Link>
                          </div>
                        </div>
                      ))
                    : products.map((producto) => (
                        <div className="product-card" key={producto.id}>
                          <img
                            src={producto.images[0]?.imagen}
                            alt={`Imagen de ${producto.nombre}`}
                            className="product-image"
                            onClick={() =>
                              mostrarImagenAmpliada(
                                producto.images[0]?.imagen
                              )
                            }
                          />

                          <div className="product-info">
                            <h2 className="product-title">{producto.nombre}</h2>
                            <p className="product-description">
                              {producto.descripcion}
                            </p>
                            <p className="product-price">${producto.precio}</p>
                            <Button size="small" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</Button>
                            <Link to={`/producto/${producto.id}`}>Detalle</Link>
                          </div>
                        </div>
                      ))}
                </>
              )}
            </>
          ) : null}
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
