
import aboutUs from '../../assets/Foto-Banner-Principal.jpeg';
import "./_aboutUs.scss";
import Title from '../Title';

export const QuienesSomos = () => {
    return (
        
        <div className="quienes_somos_container">     
            <Title text="Quiénes somos" />
            <section className='quienes_somos_text_img'>
                <div className="quienes_somos_text">
                <p>
                    <b>Abrimos puertas donde otros ven barreras.</b> En <b>Fundación Formar</b>, trabajamos para construir comunidades empoderadas, donde cada persona pueda recuperar la autonomía y construir su propio destino.
Nos dedicamos a la inclusión sociolaboral de personas en situación de vulnerabilidad, conectando actores, conocimientos y recursos para generar un impacto positivo y transformador.
                </p>
                <p>
                    Nuestro enfoque integral se basa en fortalecer la autonomía a través del trabajo, brindando oportunidades de desarrollo y promoviendo la igualdad. Desarrollamos estrategias de abordaje territorial local, adaptándonos a las necesidades de cada barrio y comunidad.
                </p> 
                </div> 
                <div className="quienes_somos_img">
                    <img src={aboutUs} alt="" />
                </div>                
            </section>
        </div>
    );
    
}

