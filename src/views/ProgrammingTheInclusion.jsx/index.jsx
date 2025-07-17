import "./ProgrammingTheInclusion.scss";
import { CardProgramming } from "../../components/CardProgramming";
import programmer from "../../assets/programmer.svg";
import Rocket from "../../assets/rocket.svg";
import Briefcase from "../../assets/Briefcase.svg";
import Users from "../../assets/group.svg";
import Title from "../../components/Title";

export const ProgrammingTheInclusion = () => {
  const infoCards = [
    {
      id: 1, // Asegúrate de tener un identificador único para cada elemento
      icon: programmer,
      nameIcon: "programmer",
      text: "Capacitación en Programación Web Full Stack. El rubro laboral IT ofrece empleos de calidad, con altos salarios y posibilidad de construir una carrera y un futuro laboral sostenido",
    },
    {
      id: 2, // Identificador único
      icon: Rocket,
      nameIcon: "Rocket",
      text: (
        <> {/* Usamos un fragmento para agrupar el texto y el link */}
          Capacitaciones intensivas enfocadas en las necesidades del mercado y entrenamiento laboral en proyectos reales dentro de nuestra software factory{" "}
          <a
            href="https://forit.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FOR IT
          </a>
          .
        </>
      ),
      list: [
        "Capacitación técnica en Full Stack: Clases teóricas y prácticas.",
        "Capacitación en habilidades para el mundo del trabajo (Soft skills).",
        "Master Classes en tecnología brindadas por expertos del rubro tecnológico.",
      ],
    },
    {
      id: 3, // Identificador único
      icon: Briefcase,
      nameIcon: "Briefcase",
      text: "Somos puente entre las empresas en búsqueda de talentos y los egresados. Tenemos una amplia base de datos con perfiles de alumnos en búsqueda de su primera experiencia laboral IT.",
    },
    {
      id: 4, // Identificador único
      icon: Users,
      nameIcon: "Users",
      text: "Acompañamiento a Egresados: Programa de tutorías para egresados en tres áreas: soft, skills & inserción laboral. Especialización en lenguajes y conversatorio en inglés.",
    },
  ];

  return (
    <section className="ProgrammingTheInclusion-container container">
      <div className="titleContainer">
        <Title text="Ecosistema favorable para"/>
        <h1 className="title">
          la <span>inserción en la tecnología</span>
        </h1>
      </div>

      <div className="container-grid">
        {infoCards.map((info) => (
          <CardProgramming
            key={info.id}
            icon={info.icon}
            nameIcon={info.nameIcon}
            text={info.text}
            list={info.list ? info.list : []}
          />
        ))}
      </div>
    </section>
  );
};
