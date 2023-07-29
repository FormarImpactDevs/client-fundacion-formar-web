import "./_teamUndertaking.scss";
import {Card} from "../Card";
import Image from "../../assets/team_default.jpg";

export const EquipoEmprendiendo = () => {
    return (
        <div className="teamUndertaking_container"> 
            <h1 className="title">Equipo de Emprendiendo la Inclusión</h1>
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