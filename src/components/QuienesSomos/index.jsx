
import aboutUs from '../../assets/quienesSomos.jpeg';
import "./_aboutUs.scss";
import Title from '../Title';

export const QuienesSomos = () => {
    return (
        
        <div className="quienes_somos_container">     
            <Title text="Quiénes somos" />
            <section className='quienes_somos_text_img'>
                <div className="quienes_somos_text">
                <p>
                Somos una fundación comprometida con la inclusión sociolaboral de personas en situación de vulnerabilidad. Trabajamos para construir comunidades empoderadas, fomentando la participación activa y el crecimiento colectivo. Conectamos actores de la sociedad civil, conocimientos y recursos para generar un impacto positivo en las comunidades que acompañamos.
                </p>
                <p>
                Nuestro enfoque se basa en fortalecer la autonomía de quienes han sido excluidos a través del trabajo, brindándoles oportunidades de desarrollo y promoviendo la igualdad de oportunidades. Se desarrolla una estrategia de abordaje territorial local en cada barrio con una mirada multisectorial e integral.   
                </p> 
                </div> 
                <div className="quienes_somos_img">
                    <img src={aboutUs} alt="" />
                </div>                
            </section>
        </div>
    );
    
}

