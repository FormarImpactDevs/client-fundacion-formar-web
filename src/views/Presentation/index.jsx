import { Button } from "../../components/Button";
import "./_presentation.scss";
import AOS from "aos";
import students from "../../assets/students.svg"
import ondas from "../../assets/ondas.svg"
AOS.init();

export const Presentation = () => {
  return (
    <section className="presentation_container">
      {/* imagen */}
      <div className="presentation">
          <figure className="students">
        <img
          src={students}
          alt="Imagen de estudiantes"
          className="presentation_img"
        />
      </figure>
      <div className="firmFormar" data-aos="zoom-in-right">
        <h1 className="presentation_title">
          Formar para <br />
          incluir,
          <span className="presentation_span">
            {" "}
            trabajar
            <br />
            para crecer
          </span>
        </h1>

        <div className="presentation_center">
          {/* button */}
          <a href="#about">
          <Button info={"CONOCENOS"} />
          </a>
        </div>
      </div>

      {/* ondas */}
      <figure className="ondas">
        <img
          src={ondas}
          alt="Divisor ondulado"
          className="presentation_img"
        />
      </figure>
      </div>
    
    </section>
  );
};
