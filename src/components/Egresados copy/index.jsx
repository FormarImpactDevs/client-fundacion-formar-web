import "./_egresados.scss";

export const Egresados = () => {
  return (
    <div className="egresados_container">
      <h1 className="title">Conoce a los egresados</h1>

      <section className="egresados_text_video">
        <div className="egresados_text">
          <h2>
            Te compartimos los testimonios de algunos egresados de Programando
            la Inclusión
          </h2>
        </div>
        <div className="video">
          {/* <video width="100%" height="300px"src ={video} controls/> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kI64BoyVZVw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};
