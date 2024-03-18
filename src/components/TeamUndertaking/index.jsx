import "./_teamUndertaking.scss";
import {Card} from "../Card";
import Image1 from "../../assets/TemsFormar/eloisaDupont.jpg";
import Image2 from "../../assets/TemsFormar/AlecxiaOrtizBasualdo.jpeg";
import Image3 from "../../assets/TemsFormar/violetaUrquiza.jpg";
import Image4 from "../../assets/TemsFormar/violetaMoyano.jpeg";
import Title from "../Title"

export const EquipoEmprendiendo = () => {
    return (
        <div className="teamUndertaking_container container"> 
            <Title text="Equipo emprendiendo la inclusión"/>
            <div className="teamUndertaking_cards">
                <Card
                image={Image1}
                title="Eloisa Dupont"
                subtitle="Responsable de emprendimientos"
                />
                <Card
                image={Image2}
                title="Alexia Ortiz Basualdo"
                subtitle="Responsable de emprendimientos"
                />
                <Card
                image={Image3}
                title="Violeta Urquiza"
                subtitle="Responsable de emprendimientos"
                />
                <Card
                image={Image4}
                title="Violeta Moyano"
                subtitle="Responsable de emprendimientos"
                />
            </div>
        </div>
    )
}