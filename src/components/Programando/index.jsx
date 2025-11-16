import programming from "../../assets/IMG_6471.jpg";
import "./_programming.scss";
import Title from '../Title';
import foritIcon from '../../assets/icon-forit.svg';

export const Programando = () => {
    return (
        <div className="programando_container">
                 <Title text="Ecosistema ForIT"/>
            <section className="programando_text_img">
                <div className="programando_text">
                    <p className="paragraph">
                        Nuestro ecosistema tiene como objetivo crear un puente entre las empresas que están liderando la revolución digital y un nuevo talento.
                    </p>
                    <p className="paragraph">
                        Promovemos la inserción laboral en el sector IT mediante un ecosistema que combina formación técnica, desarrollo de habilidades blandas y experiencia profesional.
                    </p>
                    <p className="paragraph">
                        Nuestra misión es ser un puente entre la educación y el trabajo, brindando la oportunidad para que el talento se convierta en profesión.
                    </p>

                                        <div className="programando_flow">
                                                <span className="flow_label">Estudiante</span>
                                                <span className="flow_arrow" aria-hidden>
                                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15 30H45M45 30L30 15M45 30L30 45" stroke="#0A6AF7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <div className="flow_brand">
                                                     <img src={foritIcon} alt="ForIT" />
                                                     <span>forIT</span>
                                                </div>
                                                <span className="flow_arrow" aria-hidden>
                                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15 30H45M45 30L30 15M45 30L30 45" stroke="#0A6AF7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <span className="flow_label">Profesional</span>
                                        </div>
                </div>
                <div className="programando_img">
                    <img src={programming} alt="programando la inclusión" />
                </div>
                

            </section>
        </div>
    )
}