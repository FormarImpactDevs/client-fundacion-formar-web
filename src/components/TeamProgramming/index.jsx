import "./_teamProgramming.scss";
import { Slider } from "../Slider";
import Title from "../Title";
import Image1 from "../../assets/team_default.jpg";
import Image2 from "../../assets/team2.jpg";
import Image3 from "../../assets/team3.jpg";
import Image4 from "../../assets/team4.jpg";
import Image5 from "../../assets/team5.jpg";
import Image6 from "../../assets/team6.jpg";
import Image7 from "../../assets/team7.jpg";
import Image8 from "../../assets/team8.jpg";
import Image9 from "../../assets/team9.jpg";
import Image10 from "../../assets/team10.jpg";

export const EquipoProgramando = () => {
  const cards = [
    {
      image: Image1,
      title: "Nombre Apellido",
      subtitle: "Rol",
    },
    {
      image: Image2,
      title: "Nombre Apellido",
      subtitle: "Rol2",
    },
    {
      image: Image3,
      title: "Nombre Apellido",
      subtitle: "Rol3",
    },
    {
      image: Image4,
      title: "Nombre Apellido",
      subtitle: "Rol4",
    },
    {
      image: Image5,
      title: "Nombre Apellido",
      subtitle: "Rol5",
    },
    {
      image: Image6,
      title: "Nombre Apellido",
      subtitle: "Rol6",
    },
    {
      image: Image7,
      title: "Nombre Apellido",
      subtitle: "Rol7",
    },
    {
      image: Image8,
      title: "Nombre Apellido",
      subtitle: "Rol8",
    },
    {
      image: Image9,
      title: "Nombre Apellido",
      subtitle: "Rol9",
    },
    {
      image: Image10,
      title: "Nombre Apellido",
      subtitle: "Rol10",
    },
  ];
  return (
    <div className="teamProgramming_container">
      <Title text="Equipo programando la inclusión" />
      <div className="teamProgramming_slider">
        <Slider cards={cards} />
      </div>
    </div>
  );
};
