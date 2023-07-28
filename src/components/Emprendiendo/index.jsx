import "./_undertaking.scss";
import  Acompañamos  from "../../assets/manos.png";
import  Potenciamos  from "../../assets/flechas.png";
import  Puente  from "../../assets/puente.png";


export const Emprendiendo = () => {
    return (
        <div className="emprendiendo_container">
            <h1 className="title">Emprendiendo la Inclusión</h1>
            <div className="emprendiendo_text">
                <p className="paragraph1">Trabajamos en el fortaleciendo de emprendimientos sociales para que se inserten en al economica formal.</p>
                <h2 className="subtitle">¿Cómo?</h2>
            </div>
            <section className="emprendiendo_section_cards">
                <div className="emprendiendo_card">
                    <figure>
                   <img src={Acompañamos} alt="" />
                    </figure>
                    <h2 className="subtitle">Acompañamos</h2>
                    <p className="paragraph2">Acompañamos a personas que tienen un oficio o un emprendimiento existente a que se empoderen a través de su trabajo</p>
                </div>
                <div className="emprendiendo_card">
                    <figure>
                   <img src={Potenciamos} alt="" />
                    </figure>
                    <h2 className="subtitle">Potenciamos</h2>
                    <p className="paragraph2">Potenciamos el crecimiento y proceso de profesionalización de los emprendedores para realizar productos artesanales, de calidad y diseño.</p>
                </div>
                <div className="emprendiendo_card">
                    <figure>
                   <img src={Puente} alt="" />
                    </figure>
                    <h2 className="subtitle">Somos puente</h2>
                    <p className="paragraph2">Generamos oportunidades de comercialización entre clientes que creen en el consumo responsable y los emprendedores que buscan una mejora en su calidad de vida.</p>
                </div>
            </section>
    
        </div>
    )
}