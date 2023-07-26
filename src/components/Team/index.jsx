import "./_team.scss";
import Image from "../../assets/team_default.jpg";

export const Equipo = () => {
    return (
        <div className="team_container">
            <h1 className="title">Equipo de Coordinación General</h1>
            <div className="team_cards">
                <div className="team_card">
                    <figure>
                        <img src={Image} alt="" />
                    </figure>
                    <h3 className="paragraph1">Mercedes Lacroze</h3>
                    <h3 className="paragraph2">Presidente</h3>
                </div>
                <div className="team_card">
                    <figure>
                        <img src={Image} alt="" />
                    </figure>
                    <h3 className="paragraph1">Victoria Lacroze</h3>
                    <h3 className="paragraph2">Gerente general</h3>
                </div>
            </div>
        </div>
    )
}