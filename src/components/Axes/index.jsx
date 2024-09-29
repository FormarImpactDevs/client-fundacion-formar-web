import "./_axes.scss";
import Title from "../Title";
import Subtitle from "../Subtitle";
import useObserverComponent from "../../hooks/useObserverComponent";

export const Ejes = () => {
  const { programingIsIntersecting, undertakingIsIntersecting } =
    useObserverComponent();

  return (
    <div className="axes_container">
      <Title text="¿Cómo lo hacemos?" />
      <Subtitle text="Tenemos tres áreas de trabajo" />
      <section className="axes_cards">
        <div className="axes_card">
          <a
            href="#undertaking"
            id="UndertakingInclusion"
            className={undertakingIsIntersecting ? "selected" : ""}
          >
            <h3 className="paragraph1">
              Fortalecimiento de emprendimientos locales
            </h3>
            <p className="paragraph2">
              {" "}
              <span>Emprendiendo la inclusión</span> es un programa de
              acompañamiento a emprendedores a la economía formal.
            </p>
          </a>
        </div>
        <div className="axes_card">
          <a
            href="#programing"
            id="SchedulingInclusion"
            className={programingIsIntersecting ? "selected" : ""}
          >
            <h3 className="paragraph1">Capacitaciones con salida laboral</h3>
            <p className="paragraph2">
              - <span>Programando la inclusión</span> es un programa de
              formación e inserción laboral en el sector IT. <br /> -{" "}
              <span>FOR IT</span> Software Factory con impacto social.
            </p>
          </a>
        </div>
        <div className="axes_card">
          <a href="">
            <h3 className="paragraph1">Trabajando la inclusión</h3>
            <p className="paragraph2">
              Puentes de <span>oportunidades</span> y{" "}
              <span>acompañamientos</span> para oportunidades de trabajo en
              relación de dependencia y acompañamiento.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
};
