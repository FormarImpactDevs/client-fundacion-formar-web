import programming from "../../assets/programming1.jpg";
import "./_programming.scss";

export const Programando = () => {
    return (
        <div className="programando_container">
            <h1 className="title">Programando la inclusión</h1>
            <section className="programando_text_img">
                <div className="programando_text">
                    <p className="paragraph"> Es un puente entre las empresas que están liderando la revolución digital y un nuevo talento proveniente de comunidades vulneradas.</p>
                    <p>Formamos y acompañamos en la inserción al mercado IT a las nuevas generaciones de programadores.</p>
                </div>
                <div className="programando_img">
                    <img src={programming} alt="programando la inclusión" />
                </div>
                

            </section>
        </div>
    )
}