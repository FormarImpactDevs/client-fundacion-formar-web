import { Button } from "../../components/Button";
import "./_presentation.scss";
import AOS from "aos";
import presentation from "../../assets/formar_principal_banner.png";
AOS.init();

export const Presentation = () => {
  return (
    <section className="presentation_container">
      {/* imagen */}
      <div className="presentation">
          <figure className="students">
        <img
          src={presentation}
          alt="Imagen de estudiantes"
          className="presentation_img"
        />
      </figure>
      <div className="firmFormar" data-aos="zoom-in-right">
        <h1 className="presentation_title">
          Formar para incluir, <br/>
          <span className="presentation_span">
            {" "}
            trabajar para crecer
          </span>
        </h1>

        <div className="presentation_center">
          {/* button */}
          <a href="#about">
          <Button info={"CONOCENOS"} />
          </a>
        </div>
      </div>
      </div>
    
    </section>
  );
};
