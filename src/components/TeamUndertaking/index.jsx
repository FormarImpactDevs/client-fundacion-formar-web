import "./_teamUndertaking.scss";
import Image from "../../assets/team_default.jpg";

export const EquipoEmprendiendo = () => {
    return (
        <div className="teamUndertaking_container"> 
            <h1 className="title">Equipo de Emprendiendo la Inclusión</h1>
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