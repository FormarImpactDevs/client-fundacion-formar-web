import programming from "../../assets/programming1.jpg";
import "./_programming.scss";
import Title from '../Title';

export const Programando = () => {
    return (
        <div className="programando_container">
                 <Title text="Programando la inclusión "/>
            <section className="programando_text_img">
                <div className="programando_text">
                    <span>
                       <p className="paragraph"> <span>&bull;</span> Es un programa que tiene como objetivo crear un puente entre las empresas que están liderando la revolución digital y un nuevo talento.</p> 
                    </span>
                    
                    <p className="paragraph"> <span>&bull;</span> Formamos y acompañamos a las nuevas generaciones de programadores en su inserción al mercado IT </p>
                </div>
                <div className="programando_img">
                    <img src={programming} alt="programando la inclusión" />
                </div>
                

            </section>
        </div>
    )
}