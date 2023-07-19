import aboutUs from '../../assets/quienesSomos.jpeg';
import "./_news.scss";

export const QuienesSomos = () => {
    return (
        <div className="quienes_somos_container">     
            <h2 className="title">QUIENES SOMOS</h2>
            <section className='quienes_somos_text_img'>
                <div className="quienes_somos_text">
                  <p className="paragraph1">
                    Somos una fundación comprometida con la inclusión sociolaboral de personas en situación de vulnerabilidad. Trabajamos para construir comunidades empoderadas, fomentando la participación activa y el crecimiento colectivo. Conectamos actores de la sociedad civil, conocimientos y recursos para generar un impacto positivo en las comunidades que acompañamos.
                </p>
                <p className="paragraph1">
                    Nuestro enfoque se basa en fortalecer la autonomía de quienes han sido excluidos a través del trabajo, brindándoles oportunidades de desarrollo y promoviendo la igualdad de oportunidades. Además, nos esforzamos por construir un futuro sostenible, creando procesos y productos.  
                </p> 
                </div> 
                <div className="quienes_somos_img">
                    <img src={aboutUs} alt="" />
                </div>                
            </section>
                 
        </div>
    );
    
}