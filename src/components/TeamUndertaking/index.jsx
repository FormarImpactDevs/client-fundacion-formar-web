import "./_teamUndertaking.scss";
import {Card} from "../Card";
import Image from "../../assets/team_default.jpg";
import Title from "../Title"

export const EquipoEmprendiendo = () => {
    return (
        <div className="teamUndertaking_container container"> 
            <Title text="Equipo emprendiendo la inclusión"/>
            <div className="teamUndertaking_cards">
                <Card
                image={Image}
                title="Nombre Apellido"
                subtitle="Rol"
                />
                <Card
                image={Image}
                title="Nombre Apellido"
                subtitle="Rol"
                />
                <Card
                image={Image}
                title="Nombre Apellido"
                subtitle="Rol"
                />
            </div>
        </div>
    )
}