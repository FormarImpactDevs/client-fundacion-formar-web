import "./_productCart.scss";
import image1 from "../../assets/about1.jpg";
import Button from "@mui/material/Button";
import Title from "../Title";

export const ProductCart = () => {
  return (
    <div className="productCart-container">
      <Title text="Mi compra" />
      <div className="productCart-product-info">
        <div className="productCart-producto">
          <div className="productCart-product-image">
            <img src={image1} alt="" />
          </div>
          <div className="productCart-product-info">
            <h2 className="paragraph2">Nombre del producto</h2>
            <h2 className="paragraph2">Precio</h2>
            <form action="">
              <p className="paragraph2">Cantidad</p>
              <input type="number" name="quantity" id="Cantidad"></input>
            </form>
          </div>
        </div>
        <div className="productCart-producto">
          <div className="productCart-product-image">
            <img src={image1} alt="" />
          </div>
          <div className="productCart-product-info">
            <h2 className="paragraph2">Nombre del producto</h2>
            <h2 className="paragraph2">Precio</h2>
            <form action="">
              <p className="paragraph2">Cantidad</p>
              <input type="number" name="quantity" id="Cantidad"></input>
            </form>
          </div>
        </div>
        
        <div className="productCart-info">
          <h2 className="paragraph2">Subtotal: $9999</h2>
          <a href="">
            <Button
              variant="contained"
              size="large"
              className="button"
              sx={{
                color: "secondary.light",
              }}
            >
              Iniciar compra
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
