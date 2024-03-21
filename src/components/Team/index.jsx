import "./_team.scss";
import {Card} from "../Card";
import Image1 from "../../assets/TemsFormar/MercedesLacroze.png";
import Image2 from "../../assets/TemsFormar/victoriaLacroze.jpg";
import Image3 from "../../assets/TemsFormar/AGnesKardashian.jpeg";
import Image4 from "../../assets/TemsFormar/Cosstte.jpeg";
import Title from '../Title';
export const Equipo = () => {
    return (
        <div className="team_container">
            <Title text="Equipo coordinación General" />
            <div className="team_cards">
                <Card
                image={Image1}
                title="Mercedes Lacroze"
                subtitle="Presidente"
                />
                <Card
                image={Image2}
                title="Victoria Lacroze"
                subtitle="Gerente General"
                />
                <Card
                image={Image3}
                title="Agnes Kardashian"
                subtitle="Responsable administrativa"
                />
                <Card
                image={Image4}
                title="Cosette Kardashian"
                subtitle="Responsable de redes"
                />
            </div>
        </div>
        
    )
}