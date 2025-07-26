import "./ProgrammingTheInclusion.scss";
import Subtitle from "../../components/Subtitle";
import Image2 from "../../assets/TemsFormar/victoriaLacroze.jpg";


// import programmer from "../../assets/programmer.svg";
// import Rocket from "../../assets/rocket.svg";
// import Briefcase from "../../assets/Briefcase.svg";
// import Users from "../../assets/group.svg";

export const ProgrammingTheInclusion = () => {


  return (
    <div className="programming_container">
      <h1 className="presentation_title">
          Ecosistema favorable para 
          <span className="presentation_span">
            {" "}
            la inserción laboral
            
          </span>
        </h1>
      <Subtitle text="Tenemos tres áreas de trabajo" />
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
            <p className="paragraph2">
              {" "}
              Formacion intensiva en programacion web full stack de 8 meses <br/>
              -formacion tecnica y humana <br/>
              -habilidades para el trabajo<br/>
              -masterclass <br/>
            </p>
          </a>
        </div>

        </section>
        
        <section className="programming_section">
          <img src={Image2} />
          <div className="programming_card">
          <a
            href="#undertaking"
            id="UndertakingInclusion"
          >
            <h3 className="paragraph1">
              ACADEMIA FORIT
            </h3>
            <p className="paragraph2">
              {" "}
              Formacion en programacion nivel 2, forlateciendo las bases 
              y sumando herramientas claves para el mercado IT .
            </p>
          </a>
        </div>

        </section>
        <section className="programming_section">
          <img src={Image2} />
          <div className="programming_card">
          <a
            href="#undertaking"
            id="UndertakingInclusion"
          >
            <h3 className="paragraph1">
              FOR IT SOFTWARE FACTORY
            </h3>
            <p className="paragraph2">
              {" "}
              Programa de entrenamiento laboral de 6 meses dentro de un entorno real laboral. Incubadora de talento en software factory.
            </p>
          </a>
        </div>

        </section>
      </section>
    </div>
  );
};
