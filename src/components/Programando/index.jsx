import programming from "../../assets/programming1.jpg";
import "./_programming.scss";

export const Programando = () => {
    return (
        <div className="programando_container">
                 <h1 className="title">&lt;Programando la inclusión/&gt;</h1>
           
            <section className="programando_text_img">
                <div className="programando_text">
                    <span>
                       <p className="paragraph">&gt;_ Es un puente entre las empresas que están liderando la revolución digital y un nuevo talento proveniente de comunidades vulneradas.</p> 
                    </span>
                    
                    <p className="paragraph">&gt;_ Formamos y acompañamos en la inserción al mercado IT a las nuevas generaciones de programadores.</p>
                </div>
                <div className="programando_img">
                    <img src={programming} alt="programando la inclusión" />
                </div>
                

            </section>
        </div>
    )
}