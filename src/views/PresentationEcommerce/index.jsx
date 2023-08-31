import "./_presentationEcommerce.scss";
import emprendedores from "../../assets/emprendedores.jpg";

export const PresentationEcommerce = () => {
  return (
    <section className="presentationEcommerce_container">
      {/* imagen */}
      <div className="presentationEcommerce">
        <figure className="emprendedores">
          <img
            src={emprendedores}
            alt="Imagen de emprendedores"
            className="presentationEcommerce_img"
          />
        </figure>
        <div className="textFormar" data-aos="zoom-in-right">
          <h1 className="presentation_title">
            “Acompañamos 
            <span className="presentation_span">
               {" "} a personas que tienen un oficio o un emprendimiento existente a
              que se empoderen a través de su trabajo”
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};
