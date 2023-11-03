import "./_productDetail.scss";
import Button from "@mui/material/Button";
import image1 from "../../assets/about1.jpg";
import image2 from "../../assets/about2.jpg";
import image3 from "../../assets/about3.jpg";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

export const ProductDetail = () => {
  const { id } = useParams();

  const { getProductById, product } = useProducts()

  useEffect(() => {
    getProductById(id)
  }, [])

  if(!product) return <CircularProgress />

  return (
    <div className="productDetail-container">
      <div className="productDetail-images-container">
        <div className="productDetail-images">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
        <div className="productDetail-image-major">
          <img src={product.images[0]} alt="Imagen principal" />
        </div>
      </div>
      <div className="productDetail-info">
        <h2 className="subtitle">{product?.nombre}</h2>
        <p className="paragraph2">
          {product.descripcion}
        </p>
        <p className="paragraph1"> Elaborado por EMPRENDIMIENTO</p>
        <h3 className="subtitle">$10000</h3>
        <form action="">
          <p className="paragraph2">Cantidad</p>
          <input type="number" name="quantity" id="Cantidad"></input>
        </form>
        <a href="">
          <Button
            variant="contained"
            size="large"
            className="button"
            sx={{
              color: "secondary.light",
            }}
          >
            Agregar al carrito
          </Button>
        </a>
      </div>
    </div>
  );
};
