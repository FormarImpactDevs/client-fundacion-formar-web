import dh from "../../assets/dh.png";
import santander from "../../assets/santander.png";
import sanMiguel from "../../assets/sanmiguel.png";
import lanus from "../../assets/municipio_lanus.png";
import pampaEnergia from "../../assets/pampaenergia.png"
import "./_aliadosP.scss";
import Title from "../Title"
import Subtitle from "../Subtitle";


export const AliadosProg =() => {
    return (
        <section className="aliadosp_container">
            <Title text="Hacen posible este programa  "/>
            <Subtitle text="Empresas y organizaciones comprometidas con la inclusión laboral en el sector IT" />
           <div className="row">
            <div className="img_aliados"><img src={santander} alt="Logo santander"/></div>
            <div className="img_aliados"><img src={dh} alt="Logo Digital House"/></div>
            <div className="img_aliados"><img src={sanMiguel} alt="Logo Municipalidad San Miguel"/></div>
            <div className="img_aliados"><img src={ pampaEnergia } alt="Logo Pampa energia " /></div>
            <div className="img_aliados"><img className="lanus" src={lanus} alt="Logo Municipalidad de Lanus" />
            </div>
           </div>
           
       </section>
    )
} 