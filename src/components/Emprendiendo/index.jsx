import "./_undertaking.scss";
import Acompañamos from "../../assets/manos.png";
import Potenciamos from "../../assets/flechas.png";
import Puente from "../../assets/puente.png";
import Title from "../Title";
import Subtitle from "../Subtitle";

export const Emprendiendo = () => {
  return (
    <div className="emprendiendo_container">
      <Title text="Emprendiendo la inclusión" />
      <div className="emprendiendo_text">
        <Subtitle text="Trabajamos fortaleciendo de emprendimientos sociales para que se inserten en la economía formal." />
        <h4 className="subtitle2">¿Cómo?</h4>
      </div>
      <section className="emprendiendo_section_cards">
        <div className="emprendiendo_card">
          <figure>
            <img src={Acompañamos} alt="" />
          </figure>
          <h2 className="subtitle">ACOMPAÑAMOS</h2>
          <p className="paragraph2">
            Acompañamos a personas que tienen un oficio o un emprendimiento
            existente a que se empoderen a través de su trabajo
          </p>
        </div>
        <div className="emprendiendo_card">
          <figure>
            <img src={Potenciamos} alt="" />
          </figure>
          <h2 className="subtitle">POTENCIAMOS</h2>
          <p className="paragraph2">
            Potenciamos el crecimiento y proceso de profesionalización de los
            emprendedores para realizar productos artesanales, de calidad y
            diseño.
          </p>
        </div>
        <div className="emprendiendo_card">
          <figure>
            <img src={Puente} alt="" />
          </figure>
          <h2 className="subtitle">SOMOS PUENTE</h2>
          <p className="paragraph2">
            Generamos oportunidades de comercialización entre clientes que creen
            en el consumo responsable y los emprendedores que buscan una mejora
            en su calidad de vida.
          </p>
        </div>
      </section>
    </div>
  );
};
