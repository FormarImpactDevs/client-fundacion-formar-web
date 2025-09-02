import "./_teamProgramming.scss";
import Title from "../Title";
import Slide3d from "../Slider3d";
import EricMena from "../../assets/TemsFormar/EricMena.jpg";
import DavidCusi from "../../assets/TemsFormar/DavidCusi.jpg";
import PabloBaleztena from "../../assets/TemsFormar/PabloBaleztena.jpg";
import FabianCoseglia from "../../assets/TemsFormar/FabianCoseglia.jpg";
import AngelGimenez from "../../assets/TemsFormar/AngelGimenez.jpg";
import JulianAquino from "../../assets/TemsFormar/JulianAquino.jpeg";
import TamaraBenitez from "../../assets/TemsFormar/TamaraBenitez.jpg";
import SantiagoUria from "../../assets/TemsFormar/SantiagoUria.jpg";
import SebastianChoque from "../../assets/TemsFormar/SebastianChoque.jpg";
/* import Image10 from "../../assets/TemsFormar/team10.jpg"; */


export const EquipoProgramando = () => {
  const cardsInfo = [
    {
      img: EricMena,
      name: "Eric Mena",
      description: "Docente",
      type: "person",
    },
    {
      img: FabianCoseglia,
      name: "Fabian Coseglia",
      description: "Ayudante",
      type: "person",
    },
    {
      img: JulianAquino,
      name: "Julian Aquino",
      description: "Docente",
      type: "person",
    },
    {
      img: PabloBaleztena,
      name: "Pablo Baleztena",
      description: "Senior líder",
      type: "person",
    },
    {
      img: TamaraBenitez,
      name: "Tamara Benítez",
      description: "Semi senior",
      type: "person",
    },
    {
      img: SebastianChoque,
      name: "Sebastian Choque",
      description: "Semi senior",
      type: "person",
    },
    {
      img: DavidCusi,
      name: "David Cusi",
      description: "Semi senior",
      type: "person",
    },
    {
      img: SantiagoUria,
      name: "Santiago Uría",
      description: "Docente",
      type: "person",
    },
    {
      img: AngelGimenez,
      name: "Ángel Giménez",
      description: "Semi senior",
      type: "person",
    },
  ];

  return (
    <div className="teamProgramming_container">
      <Title text="Equipo programando la inclusión" />
      <div>        
        <Slide3d list={cardsInfo} type={"person"} />
      </div>
    </div>
  );
};
