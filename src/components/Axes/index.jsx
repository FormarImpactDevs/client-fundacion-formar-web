import "./_axes.scss";
import Title from "../Title";
import useObserverComponent from "../../hooks/useObserverComponent";

export const Ejes = () => {
  const { programingIsIntersecting, undertakingIsIntersecting } =
    useObserverComponent();

  return (
    <div className="axes_container">
      <Title text="Tenemos 3 áreas de trabajo" />
      <section className="axes_cards">
        <div className="axes_card">
          <a
            href="#undertaking"
            id="UndertakingInclusion"
            className={undertakingIsIntersecting ? "selected" : ""}
          >
            <h3 className="paragraph1">
              Emprendiendo la inclusión
            </h3>
            <p className="paragraph2">
              {" "}
              Es un programa de acompañamiento a 
              emprendedores sociales en su camino hacia la economía formal, a través de la curaduría de productos y oportunidades de ventas.
            </p>
          </a>
        </div>
        <div className="axes_card">
          <a
            href="#programing"
            id="SchedulingInclusion"
            className={programingIsIntersecting ? "selected" : ""}
          >
            <h3 className="paragraph1">Programando la inclusión</h3>
            <p className="paragraph2">
              Programas de formación y entrenamiento laboral para insertarse al mercado IT a través de la programación web full stack
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
