import React from "react";
import "../ProductsEcommerce/ProductsOfEnterprise/_productsEcommerce.scss";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const ProductCard = (producto) => {
  const mostrarImagenAmpliada = (imagen) => {
    setImagenAmpliadaSrc(imagen);
    setImagenAmpliadaVisible(true);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliadaVisible(false);
  };

  return (
    <div className="product-card" key={producto.id}>
      <img
        src={producto.images[0]?.imagen}
        alt={`Imagen de ${producto.nombre}`}
        className="product-image"
        onClick={() => mostrarImagenAmpliada(producto.images[0]?.imagen)}
      />
      <div className="product-info">
        <h2 className="product-title">{producto.nombre.slice(0, 30)}</h2>
        <p className="product-description">
          {producto.descripcion.slice(0, 50)}
        </p>

        <p className="product-price">${producto.precio}</p>

        <Button size="small" onClick={() => agregarAlCarrito(producto)}>
          Agregar al carrito
        </Button>
        <Link to={`/producto/${producto.id}`}>Detalle</Link>
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
};
