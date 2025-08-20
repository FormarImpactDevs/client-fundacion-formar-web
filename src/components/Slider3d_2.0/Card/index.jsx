import styles from "./card.module.scss";
import PropTypes from 'prop-types';

export const Card = ({ img, type, name, description, onClick }) => {
  return (
    <>
      {type === "person" ? (
        <div className={styles.card} onClick={onClick}>
          <div className={styles.image_content}>
            <span className={styles.overlay}></span>

            <div className={styles.card_image_person}>
              <img src={img} alt="img" className={styles.card_img_person} />
            </div>
          </div>
          <div className={styles.card_content}>
            <h2 className="paragraph1">{name}</h2>
            <p className="paragraph2">{description}</p>
          </div>
        </div>
      ) : (
        <div className={styles.card_image}>
          <img src={img} alt="img" className={styles.card_img} />
        </div>
      )}
    </>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func, 
};
