import { Button } from "../Button";
import "./_presentation.scss";
import AOS from 'aos';
AOS.init();

export const Presentation = () => {
  return (
    <section className="presentation_container">
      {/* imagen */}
      <figure className="students">
        <img
          src="./students.svg"
          alt="Imagen de estudiantes"
          className="presentation_img"
        />
      </figure>
      <div className="firmFormar" data-aos="zoom-in-right">
        <h1>
          Formar para <br />
          incluir,<span> trabajar<br /> 
          para crecer</span> 
        </h1>

        <div className="presentation_center">
          {/* button */}
          <Button info={"CONOCENOS"}/>
        </div>
      </div>

      {/* ondas */}
      <figure className="ondas">
        <img src="./ondas.svg" alt="Divisor ondulado" className="presentation_img" />
      </figure>
    </section>
  );
};
