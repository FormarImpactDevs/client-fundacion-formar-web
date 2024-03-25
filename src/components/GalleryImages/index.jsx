import styles from "./galleryImages.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GalleryImages = ({ array }) => {
  return (
    <section className={styles.container}>
      <div className={styles.gallery}>
        {array.map((item) => (
          <Link
            to={`/products?emprendimiento=${item.id}`}
            key={item.id}
            className={styles.link}
          >
            <figure className={styles.overlay}>
              <img className={styles.img} src={item.foto_card} alt="imagen" />
              <figcaption className={styles.description}>
                <h3>{item.nombre}</h3>
                <p>{item.descripcion.slice(0, 50)}</p>
                <p>¡Conocé más!</p>
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GalleryImages;

GalleryImages.propTypes = {
  array: PropTypes.array,
};
