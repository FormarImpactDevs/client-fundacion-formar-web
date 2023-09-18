import Button from "@mui/material/Button";
import image1 from "../../assets/about1.jpg";
import image2 from "../../assets/about2.jpg";
import image3 from "../../assets/about3.jpg";

export const Product = () => {
  const product = {
    name: "Producto",
    price: 1000,
    description: "Descripcion del producto",
    images: [image1, image2, image3],
  };
  return (
    <div className="product">
      <div className="product-images">
        <img src={product.images(image1)} alt="" />
        <img src={product.images(image2)} alt="" />
        <img src={product.images(image3)} alt="" />
      </div>
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
      <p>{product.description}</p>
      <Button info={"Agregar al carrito"} />
    </div>
  );
};
/*export const Product = ({name, price, description, images}) => {
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

}*/
