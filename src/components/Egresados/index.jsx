import "./_egresados.scss";
import Title from "../Title";
import Subtitle from "../Subtitle";
export const Egresados = () => {
  return (
    <div className="egresados_container">
      <Title text="Conocé a los egresados  " />
      <Subtitle text="Te compartimos los testimonios de algunos egresados de Programando la Inclusión" />
      <section className="egresados_text_video">
        <iframe
          src="https://www.youtube.com/embed/w6KLXi0RTlU?si=-8jf7DLXTf2zaxsl"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </div>
  );
};
