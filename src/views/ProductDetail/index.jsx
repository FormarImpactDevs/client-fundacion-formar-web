import Button from "@mui/material/Button";
import "./product.scss";
export const Product = ({name, price, description, images}) => {
    <div className="product">
        <div className="product-images">
            {images.map((image, index) => (
                <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="product-image"
                />
            ))}
        </div>
        <h2>{name}</h2>
        <h3>{price}</h3>
        <p>{description}</p>
        <Button info={"Agregar al carrito"}/>
    </div>
}