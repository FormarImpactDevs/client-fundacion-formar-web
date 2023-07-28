import dh from "../../assets/dh.png";
import santander from "../../assets/santander.png";
import sanMiguel from "../../assets/sanmiguel.png";
import lanus from "../../assets/municipio_lanus.png";
import pampaEnergia from "../../assets/pampaenergia.png"
import "./_aliadosP.scss";


export const AliadosProg =() => {
    return (
        <section className="aliadosp_container">
            <h1 className="title">Hacen posible este programa</h1>
            <div className="aliadosp_text">
                <h2>Empresas y organizaciones comprometidas con la inclusión laboral en el sector IT.</h2>        
           </div>
           <div className="row">
            <img src={santander} alt="Logo santander"  width="300px"/>
            <img src={dh} alt="Logo Digital House"  width="300px"/>
            <img src={sanMiguel} alt="Logo Municipalidad San Miguel" width="auto"/>
            <img className="lanus" src={lanus} alt="Logo Municipalidad de Lanus" />
            <img src={ pampaEnergia } alt="Logo Pampa energia " />
           </div>
           
       </section>
    )
} 