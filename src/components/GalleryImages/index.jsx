import styles from "./galleryImages.module.scss";
import { useHistory } from "react-router-dom";

import Image from "../../assets/team_default.jpg";
import Image2 from "../../assets/team2.jpg";
import Image3 from "../../assets/team3.jpg";
import Image4 from "../../assets/team4.jpg";
import Image5 from "../../assets/team5.jpg";
import Image6 from "../../assets/team6.jpg";

const GalleryImages = ({ array }) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/productos?emprendimiento=${id}`);
  };

  return (
    <section className={styles.container}>
      <div className={styles.gallery}>
        {array.map((item) => {
          <figure className={styles.overlay} onClick={handleClick}>
            <img className={styles.img} src={item.foto_card} alt="imagen" />
            <figcaption className={styles.description}>
              <h3>{item.nombre}</h3>
              <p>{item.descripcion}</p>
            </figcaption>
          </figure>;
        })}
        
        <figure className={styles.overlay}>
          <img className={styles.img} src={Image} alt="imagen" />
          <figcaption className={styles.description}>
            <h3>SLee Dw</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              vero!
            </p>
          </figcaption>
        </figure>
        <figure className={styles.overlay}>
          <img className={styles.img} src={Image2} alt="" />
        </figure>
        <figure className={styles.overlay}>
          <img className={styles.img} src={Image3} alt="" />
        </figure>
        <figure className={styles.overlay}>
          <img className={styles.img} src={Image4} alt="" />
        </figure>
        <figure className={styles.overlay}>
          <img className={styles.img} src={Image5} alt="" />
        </figure>
        <figure className={styles.overlay}>
          <img className={styles.img} src={Image6} alt="" />
        </figure>
        <figure className={styles.overlay}>
          <img className={styles.img} src={Image6} alt="" />
        </figure>
      </div>
    </section>
  );
};

export default GalleryImages;
