import "./_teamUndertaking.scss";
import Image from "../../assets/team_default.jpg";
import Title from "../Title"

export const EquipoEmprendiendo = () => {
    return (
        <div className="teamUndertaking_container"> 
            <Title text="Equipo emprendiendo la inclusión"/>
            <div className="teamUndertaking_cards">
                <div className="teamUndertaking_card">
                    <figure>
                        <img src={Image} alt="" />
                    </figure>
                    <h3 className="paragraph1">Nombre Apellido</h3>
                    <h3 className="paragraph2">Rol</h3>
                </div>
                <div className="teamUndertaking_card">
                    <figure>
                        <img src={Image} alt="" />
                    </figure>
                    <h3 className="paragraph1">Nombre Apellido</h3>
                    <h3 className="paragraph2">Rol</h3>
                </div>
                <div className="teamUndertaking_card">
                    <figure>
                        <img src={Image} alt="" />
                    </figure>
                    <h3 className="paragraph1">Nombre Apellido</h3>
                    <h3 className="paragraph2">Rol</h3>
                </div>
            </div>
        </div>
    )
}