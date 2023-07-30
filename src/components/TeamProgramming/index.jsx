import "./_teamProgramming.scss";
import { Slider } from "../Slider";
import Title from "../Title";
import Image from "../../assets/team_default.jpg";
export const EquipoProgramando = () => {
  const cards = [
    {
      image: Image,
      title: "Nombre Apellido",
      subtitle: "Rol",
    },
    {
      image: Image,
      title: "Nombre Apellido",
      subtitle: "Rol2",
    },
    {
      image: Image,
      title: "Nombre Apellido",
      subtitle: "Rol3",
    },
    {
      image: Image,
      title: "Nombre Apellido",
      subtitle: "Rol4",
    },
    {
      image: Image,
      title: "Nombre Apellido",
      subtitle: "Rol5",
    },
    {
      image: Image,
      title: "Nombre Apellido",
      subtitle: "Rol6",
    },
    {
      image: Image,
      title: "Nombre Apellido",
      subtitle: "Rol7",
    },
    {
      image: Image,
      title: "Nombre Apellido",
      subtitle: "Rol8",
    },
    {
      image: Image,
      title: "Nombre Apellido",
      subtitle: "Rol9",
    },
    {
      image: Image,
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
