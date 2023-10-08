import { useState, useContext } from "react";
import "./_productsEcommerce.scss";
import Button from "@mui/material/Button";
import { ProductContext } from "../../context/ProductContext";

function ProductsEcommerce() {
  const {
    products,
    productsFiltered,
    searchProducts,
    productsReady,
  } = useContext(ProductContext);

  const [imagenAmpliadaVisible, setImagenAmpliadaVisible] = useState(false);
  const [imagenAmpliadaSrc, setImagenAmpliadaSrc] = useState("");

  const mostrarImagenAmpliada = (imagen) => {
    setImagenAmpliadaSrc(imagen);
    setImagenAmpliadaVisible(true);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliadaVisible(false);
  };

  return (
    <div>
      <h1 className="title">Productos</h1>
      <div className="product-container">
        <div className="product-grid">
          {productsReady ? (
            <>
              {productsFiltered.length > 0 ? (
                productsFiltered.map((producto) => (
                  <div className="product-card" key={producto.id}>
                    <img
                      src="https://tn.com.ar/resizer/a8ChJiW4dV2W36MFlDWu31XjerM=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/Y4SPWR4KY5F6PFY5PBJOBK46FU.jpg"
                      alt={`Imagen de ${producto.nombre}`}
                      className="product-image"
                      onClick={() =>
                        mostrarImagenAmpliada(
                          "https://tn.com.ar/resizer/a8ChJiW4dV2W36MFlDWu31XjerM=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/Y4SPWR4KY5F6PFY5PBJOBK46FU.jpg"
                        )
                      }
                    />

                    <div className="product-info">
                      <h2 className="product-title">{producto.nombre}</h2>
                      <p className="product-description">
                        {producto.descripcion}
                      </p>
                      <p className="product-price">${producto.precio}</p>
                      <Button size="small">Agregar al carrito</Button>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  {searchProducts.length > 0
                    ? searchProducts.map((producto) => (
                        <div className="product-card" key={producto.id}>
                          <img
                            src="https://tn.com.ar/resizer/a8ChJiW4dV2W36MFlDWu31XjerM=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/Y4SPWR4KY5F6PFY5PBJOBK46FU.jpg"
                            alt={`Imagen de ${producto.nombre}`}
                            className="product-image"
                            onClick={() =>
                              mostrarImagenAmpliada(
                                "https://tn.com.ar/resizer/a8ChJiW4dV2W36MFlDWu31XjerM=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/Y4SPWR4KY5F6PFY5PBJOBK46FU.jpg"
                              )
                            }
                          />

                          <div className="product-info">
                            <h2 className="product-title">{producto.nombre}</h2>
                            <p className="product-description">
                              {producto.descripcion}
                            </p>
                            <p className="product-price">${producto.precio}</p>
                            <Button size="small">Agregar al carrito</Button>
                          </div>
                        </div>
                      ))
                    : products.map((producto) => (
                        <div className="product-card" key={producto.id}>
                          <img
                            src="https://tn.com.ar/resizer/a8ChJiW4dV2W36MFlDWu31XjerM=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/Y4SPWR4KY5F6PFY5PBJOBK46FU.jpg"
                            alt={`Imagen de ${producto.nombre}`}
                            className="product-image"
                            onClick={() =>
                              mostrarImagenAmpliada(
                                "https://tn.com.ar/resizer/a8ChJiW4dV2W36MFlDWu31XjerM=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/Y4SPWR4KY5F6PFY5PBJOBK46FU.jpg"
                              )
                            }
                          />

                          <div className="product-info">
                            <h2 className="product-title">{producto.nombre}</h2>
                            <p className="product-description">
                              {producto.descripcion}
                            </p>
                            <p className="product-price">${producto.precio}</p>
                            <Button size="small">Agregar al carrito</Button>
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
