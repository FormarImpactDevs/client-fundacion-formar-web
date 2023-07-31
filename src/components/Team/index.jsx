import "./_team.scss";
import {Card} from "../Card";
import Image from "../../assets/team_default.jpg";
import Title from '../Title';
export const Equipo = () => {
    return (
        <div className="team_container">
            <Title text="Equipo coordinación General" />
            <div className="team_cards">
                <Card
                image={Image}
                title="Mercedes Lacroze"
                subtitle="Presidente"
                />
                <Card
                image={Image}
                title="Victoria Lacroze"
                subtitle="Gerente General"
                />
            </div>
        </div>
        
    )
}