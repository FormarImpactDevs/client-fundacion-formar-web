import "./_axes.scss";
import Title from '../Title';
import Subtitle from "../Subtitle";

export const Ejes = () => {
    return (
        <div className="axes_container">
            <Title text="¿Cómo lo hacemos?" />
            <Subtitle text="Tenemos tres áreas de trabajo" />
            <section className="axes_cards">
                <div className="axes_card">
                    <h3 className="paragraph1">Fortalecimiento de emprendimientos locales</h3>
                    <p className="paragraph2"> <a href="">Emprendiendo la inclusión</a> es un programa de acompañamiento a emprendedores a la economía formal.</p>
                </div>
                <div className="axes_card">
                    <h3 className="paragraph1">Capacitaciones con salida laboral</h3>
                    <p className="paragraph2">- <a href="">Programando la inclusión</a> es un programa de formación e inserción laboral en el sector IT. <br /> - <a href="">FOR IT</a> Software Factory con impacto social</p>
                </div>
                <div className="axes_card">
                    <h3 className="paragraph1">Trabajando la inclusión</h3>
                    <p className="paragraph2">Puentes de <a href="">oportunidades</a> y <a href="">acompañamientos</a> para oportunidades de trabajo en relación de dependencia</p>
                </div>
            </section>
        </div>
    )
}