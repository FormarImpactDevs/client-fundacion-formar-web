import "./_team.scss";
import Slide3d from "../Slider3d";
import Image1 from "../../assets/TemsFormar/MercedesLacroze.png";
import Image2 from "../../assets/TemsFormar/victoriaLacroze.jpg";
import Image3 from "../../assets/TemsFormar/LuciaVarelaRoberts.jpg";
import Image4 from "../../assets/TemsFormar/FranciscoDeclich.jpg";
import Image5 from "../../assets/TemsFormar/LucasDeclich.jpeg";
import Image6 from "../../assets/TemsFormar/EloisaDupont.jpg";
import Image7 from "../../assets/TemsFormar/victoriaFornieles.jpg";
import Title from "../Title";
export const Equipo = () => {
  const cardsInfo = [
    {
      img: Image1,
      name: "Mercedes Lacroze",
      description: "Presidente",
      type: "person",
    },
    {
      img: Image2,
      name: "Victoria Lacroze",
      description: "Gerente General",
      type: "person",
    },
    {
      img: Image3,
      name: "Lucia Varela Roberts",
      description: "Responsable de Comunicación",
      type: "person",
    },
    {
      img: Image4,
      name: "Francisco Declich",
      description: "Responsable administrativo",
      type: "person",
    },
    {
      img: Image5,
      name: "Lucas Declich",
      description: "Responsable administrativo",
      type: "person",
    },
    {
      img: Image6,
      name: "Eloisa Dupont",
      description: "Gerente de Emprendiendo la Inclusión",
      type: "person",
    },
    {
      img: Image7,
      name: "Victoria Fornieles",
      description: "Gerente de Programando la Inclusión",
      type: "person",
    },
  ];
  return (
    <div className="team_container">
      <Title text="Equipo Formar" />
      <div>
        <Slide3d list={cardsInfo} type={"person"} />
      </div>
    </div>
  );
};
