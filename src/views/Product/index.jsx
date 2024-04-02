import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getProductServiceById } from "../../services/products.service";
import { useCart } from "../../context/cartContext";
// Componentes
import { Button } from "@mui/material";
import { ProductImageDetail } from "../../components/ProductImageDetail";
import { Loading } from "../../components/Loading";
import "./productDetail.scss";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad de productos

  function handleIncrease() {
    setQuantity(quantity + 1); // Aumentar la cantidad
  }

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Disminuir la cantidad (siempre y cuando no sea menor que 1)
    }
  }

  // Obtener producto por id
  const getProductById = async (id) => {
    try {
      const ProductData = await getProductServiceById(id);
      setProduct(ProductData);
      setLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getProductById(id);
    if (product !== undefined && product !== null) {
      setLoading(false);
    }
  }, [id]);

  function agregarAlCarrito(producto) {
    dispatch({ type: "AGREGAR_PRODUCTO", payload: { ...producto, quantity } });
    // Agregar el producto con la cantidad al carrito
  }

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          {/* Imagenes */}
          <ProductImageDetail images={product.images} />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50 mt-5">
            {product.emprendimientos.nombre}
          </h4>
          <h1 className="disply-5">{product.nombre}</h1>
          <h3 className="display-6 fw-bold my-4">$ {product.precio}</h3>
          <p className="lead">{product.descripcion}</p>

          {/* Input de cantidad */}
          <div className="col-md-12 col-lg-6">
            <div className="input-group mb-3">
              <button
                className="btn btn-outline-secondary mx-1"
                type="button"
                onClick={handleDecrease}
              >
                -
              </button>
              <input
                type="text"
                className="form-control text-center"
                value={quantity}
                readOnly
              />
              <button
                className="btn btn-outline-secondary mx-1"
                type="button"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
          </div>
          {/* Botones para agregar al carrito e ir al carrito */}
          <div className="flex">
            <Button
              variant="outlined"
              size="small"
              className="button"
              sx={{
                color: "primary.main",
              }}
              onClick={() => agregarAlCarrito(product)}
            >
              Agregar al carrito
            </Button>
            <NavLink to="/mi-compra">
              <Button
                variant="contained"
                size="small"
                className="button"
                sx={{
                  color: "secondary.light",
                  margin: "1.2rem",
                }}
              >
                Ir al carrito
              </Button>
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="containerDetail py-4">
      <div className="row py-2">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
};
