import "./_news.scss"
import Title from "../../components/Title"
export const Novedades = () => {
  return (
    <div className="news_container">
      <Title text="Conocé nuestras novedades "/>
      <section className="instagram_container">
        <div
          loading="lazy"
          data-mc-src="8fd2d3ed-d2c1-4ccb-8f27-ffe8c9e79e98#instagram"
        ></div>
      </section>
    </div>
  );
};
