import "./_team.scss";
import {Card} from "../Card";
import Image1 from "../../assets/TemsFormar/MercedesLacroze.png";
import Image2 from "../../assets/TemsFormar/victoriaLacroze.jpg";
import Image3 from "../../assets/TemsFormar/LuciaVarelaRoberts.jpg";
import Image4 from "../../assets/TemsFormar/FranciscoDeclich.jpg";
import Image5 from "../../assets/TemsFormar/LucasDeclich.jpeg";
import Image6 from "../../assets/TemsFormar/EloisaDupont.jpg";
import Image7 from "../../assets/TemsFormar/victoriaFornieles.jpg";
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
                title="Lucia Varela Roberts"
                subtitle="Responsable de Comunicación"
                />
                <Card
                image={Image4}
                title="Francisco Declich"
                subtitle="Responsable administrativo"
                />
                <Card
                image={Image5}
                title="Lucas Declich"
                subtitle="Responsable administrativo"
                />
                <Card
                image={Image6}
                title="Eloisa Dupont"
                subtitle="Gerente de Emprendiendo la Inclusión"
                />
                <Card
                image={Image7}
                title="Victoria Fornieles"
                subtitle="Gerente de Programando la Inclusión"
                />
            </div>
        </div>
        
    )
}