import "./ProgrammingTheInclusion.scss";
import { useId } from "react";
import { CardProgramming } from "../../components/CardProgramming";
import programmer from "../../assets/programmer.svg";
import Rocket from "../../assets/rocket.svg";
import Briefcase from "../../assets/Briefcase.svg";
import Users from "../../assets/group.svg";

export const ProgrammingTheInclusion = () => {
  const infoCards = [
    {
      icon: programmer,
      nameIcon: "programmer",
      text: "Capacitación en Programación Web Full Stack. El rubro laboral it ofrece empleos de calidad, con altos salarios y posibilidad de construir una carrera y un futuro laboral sostenido",
    },
    {
      icon: Rocket,
      nameIcon: "Rocket",
      text: "Curso intensivo de 8 meses enfocado en las necesidades del mercado.",
      list: [
        "Capacitación técnica en Full Stack: Clases teóricas y prácticas.",
        "Capacitación en habilidades para el mundo del trabajo (Soft skills).",
        "Master Classes en tecnología brindadas por expertos del rubro tecnológico.",
      ],
    },
    {
      icon: Briefcase,
      nameIcon: "Briefcase",
      text: "Somos puente entre las empresas en búsqueda de talentos y los egresados. Tenemos una amplia base de datos con perfiles de alumnos en búsqueda de su primera experiencia laboral it.",
    },
    {
      icon: Users,
      nameIcon: "Users",
      text: "Acompañamiento a Egresados: Programa de tutorías para egresados en tres áreas: soft, skills & inserción laboral. Especialización en lenguajes y conversatorio en inglés.",
    },
  ];

  return (
    <section className="ProgrammingTheInclusion-container container">
      <div className="titleContainer">
        <h1 className="title">Ecosistema favorable para</h1>
        <h1 className="title">
          la <span>inserción en la tecnología</span>
        </h1>
      </div>

      <div className="container-grid">
        {infoCards.map((info) => (
          <CardProgramming
            icon={info.icon}
            nameIcon={info.nameIcon}
            text={info.text}
            list={info.list ? info.list : []}
            key={useId}
          />
        ))}
      </div>
    </section>
  );
};
