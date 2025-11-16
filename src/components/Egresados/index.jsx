import "./_egresados.scss";
import Title from "../Title";
export const Egresados = () => {
  return (
    <div className="egresados_container">
      <Title text="Nuestra Visión" />
      <section className="egresados_text_video">
        <iframe
          src="https://www.youtube.com/embed/9WuihRlxGyo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};
