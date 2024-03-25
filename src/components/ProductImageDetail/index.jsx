import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./productImageDetail.module.scss";

export const ProductImageDetail = ({images}) => {
    const [mainImage, setMainImage] = useState(images[0].imagen);
  
    const handleClickThumbnail = (image) => {
      setMainImage(image);
    };
   
  
    return (
      <div className={styles.productImageDetail}>
        <figure className={styles.mainImage}>
          <img src={mainImage} alt="Main" />
        </figure>
        <div className={styles.thumbnailImages}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.imagen}
              alt={`Thumbnail ${index}`}
              onClick={() => handleClickThumbnail(image.imagen)}
              className={styles.thumbnail}
            />
          ))}
        </div>
      </div>
    );
}

ProductImageDetail.propTypes = {
  images: PropTypes.array,
};
