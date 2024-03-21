import "./_teamProgramming.scss";
import Title from "../Title";
import Slide3d from "../Slider3d";
import EricMena from "../../assets/TemsFormar/EricMena.jpg";
import JonathanCespedes from "../../assets/TemsFormar/JonathanCespedes.jpg";
import EmanuelArroyo from "../../assets/TemsFormar/EmanuelArroyo.jpg";
import FabianCoseglia from "../../assets/TemsFormar/FabianCoseglia.jpg";
import JuanLicciardi from "../../assets/TemsFormar/JuanLicciardi.jpeg";
import JulianAquino from "../../assets/TemsFormar/JulianAquino.jpeg";
import MartinWior from "../../assets/TemsFormar/MartinWior.jpg";
import nataliaGaitan from "../../assets/TemsFormar/nataliaGaitan.jpg";
import victoriaFornieles from "../../assets/TemsFormar/victoriaFornieles.jpg";
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
      img: JonathanCespedes,
      name: "Jonathan Cespedes",
      description: "Docente",
      type: "person",
    },
    {
      img: EmanuelArroyo,
      name: "Emanuel Arroyo",
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
      img: JuanLicciardi,
      name: "Juan Licciardi",
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
      img: MartinWior,
      name: "Martin Wior Gdud",
      description: "Coordinador",
      type: "person",
    },
    {
      img: nataliaGaitan,
      name: "Nathalia Gaitan",
      description: "Ayudante",
      type: "person",
    },
    {
      img: victoriaFornieles,
      name: "Victoria Fornieles",
      description: "Coordinadora",
      type: "person",
    },
    /* {
      img: Image10,
      name: "Nombre Apellido",
      description: "Rol10",
      type: "person",
    }, */
  ];

  return (
    <div className="teamProgramming_container">
      <Title text="Equipo programando la inclusión" />
      <div className="teamProgramming_slider">        
        <Slide3d list={cardsInfo} type={"person"} />
      </div>
    </div>
  );
};
