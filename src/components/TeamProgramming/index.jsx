import "./_teamProgramming.scss";
import Title from "../Title";
import Slide3d from "../Slider3d";
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
  const cardsInfo = [
    {
      img: Image1,
      name: "Nombre Apellido",
      description: "Rol",
      type: "person",
    },
    {
      img: Image2,
      name: "Nombre Apellido",
      description: "Rol2",
      type: "person",
    },
    {
      img: Image3,
      name: "Nombre Apellido",
      description: "Rol3",
      type: "person",
    },
    {
      img: Image4,
      name: "Nombre Apellido",
      description: "Rol4",
      type: "person",
    },
    {
      img: Image5,
      name: "Nombre Apellido",
      description: "Rol5",
      type: "person",
    },
    {
      img: Image6,
      name: "Nombre Apellido",
      description: "Rol6",
      type: "person",
    },
    {
      img: Image7,
      name: "Nombre Apellido",
      description: "Rol7",
      type: "person",
    },
    {
      img: Image8,
      name: "Nombre Apellido",
      description: "Rol8",
      type: "person",
    },
    {
      img: Image9,
      name: "Nombre Apellido",
      description: "Rol9",
      type: "person",
    },
    {
      img: Image10,
      name: "Nombre Apellido",
      description: "Rol10",
      type: "person",
    },
  ];

  return (
    <div className="teamProgramming_container">
      <Title text="Equipo programando la inclusión" />
      <div className="teamProgramming_slider">
        {/* Slider3d para descomentar */}
        <Slide3d list={cardsInfo} type={"person"} />
      </div>
    </div>
  );
};
