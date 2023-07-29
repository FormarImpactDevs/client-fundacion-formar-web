import "./_team.scss";
import {Card} from "../Card";
import Image from "../../assets/team_default.jpg";

export const Equipo = () => {
    return (
        <div className="team_container">
            <h1 className="title">Equipo de Coordinación General</h1>
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