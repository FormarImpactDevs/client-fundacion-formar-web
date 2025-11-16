import "./ProgrammingTheInclusion.scss";
import Image2 from "../../assets/computer.jpg";
import Image3 from "../../assets/forit.jpg";


// import programmer from "../../assets/programmer.svg";
// import Rocket from "../../assets/rocket.svg";
// import Briefcase from "../../assets/Briefcase.svg";
// import Users from "../../assets/group.svg";

export const ProgrammingTheInclusion = () => {


  return (
    <div className="programming_container">
      <h1 className="title">
          Ecosistema favorable para <br />
          <span style={{ color: "#74A9DA" }}>la inserción en tecnología</span>
        </h1>
      <section className="programming_cards">
        <section className="programming_section">
          <img src={Image2} />
          <div className="programming_card">
          <a
            href="#undertaking"
            id="UndertakingInclusion"
          >
            <h3 className="paragraph1">
              PROGRAMANDO LA INCLUSIÓN
            </h3>
            <div className="paragraph2">
              <p>2019-2024</p>
              <p>Formación introductoria en programación web full stack.</p>
              <ul>
                <li>Duración: 8 meses</li>
                <li>Formación técnica</li>
                <li>Formación en Soft Skills</li>
                <li>Masterclasses</li>
              </ul>
            </div>
            <div className="badge">
              <strong>32%</strong>
              <span>inserción laboral</span>
            </div>
          </a>
        </div>

        </section>
        
        <section className="programming_section">
          <img src={Image3} />
          <div className="programming_card">
          <a
            href="#undertaking"
            id="UndertakingInclusion"
          >
            <h3 className="paragraph1">
              ACADEMIA FORIT
            </h3>
            <div className="paragraph2">
              <p>Formación avanzada en programación web full stack</p>
              <p>Herramientas de trabajo claves para el mercado IT</p>
              <ul>
                <li>Duración: 5 meses</li>
                <li>Formación técnica</li>
                <li>Formación en Soft Skills</li>
                <li>Masterclasses</li>
              </ul>
            </div>
          </a>
        </div>

        </section>
        <section className="programming_section">
          <img src={Image3} />
          <div className="programming_card">
          <a
            href="#undertaking"
            id="UndertakingInclusion"
          >
            <h3 className="paragraph1">
              FOR IT SOFTWARE FACTORY
            </h3>
            <div className="paragraph2">
              <p>
                Programa de entrenamiento laboral dentro de un entorno laboral real. Nuestros pilares de trabajo:
              </p>
              <ul>
                <li>Experiencia laboral real. Primer empleo.</li>
                <li>Mentoría técnica por parte de programadores Sr.</li>
                <li>Metodología de trabajo rigurosa y con herramientas de gestión de proyectos</li>
                <li>Capacitación en soft skills</li>
                <li>Ingresos económicos</li>
              </ul>
            </div>
            <div className="badge badge--black">
              <strong>60%</strong>
              <span>inserción laboral</span>
            </div>
          </a>
        </div>

        </section>
      </section>
    </div>
  );
};
