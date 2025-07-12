import dh from "../../assets/dh.png";
import santander from "../../assets/santander.png";
import sanMiguel from "../../assets/sanmiguel.png";
import lanus from "../../assets/municipio_lanus.png";
import pampaEnergia from "../../assets/pampaenergia.png"
import accenture from "../../assets/accenture.png"
import pedidos from "../../assets/pedidosya.png"
import arredos from "../../assets/arredo.png"
import Slide3d from "../Slider3d";
import "./_aliadosP.scss";
import Title from "../Title"
import Subtitle from "../Subtitle";

  

export const AliadosProg =() => {
    const cardsInfo = [
    {
      img: dh,
     
    },
    {
      img: santander,
     
    },
    {
      img: sanMiguel,
    
    },
    {
      img: lanus,
    
    },
    {
      img: pampaEnergia,
     
    },
    {
      img: accenture,
      
    },
    {
      img: pedidos,
      
    },
    {
      img: arredos,
      
    },
  
   
  ];
    return (
        <section className="aliadosp_container">
            <Title text="Hacen posible este programa  "/>
            <Subtitle text="Empresas y organizaciones comprometidas con la inclusión laboral en el sector IT" />
            <div>        
                    <Slide3d list={cardsInfo}  />
                  </div>
           {/* <div className="row">
            <div className="img_aliados"><img src={santander} alt="Logo santander"/></div>
            <div className="img_aliados"><img src={dh} alt="Logo Digital House"/></div>
            <div className="img_aliados"><img src={sanMiguel} alt="Logo Municipalidad San Miguel"/></div>
            <div className="img_aliados"><img src={ pampaEnergia } alt="Logo Pampa energia " /></div>
            <div className="img_aliados"><img className="lanus" src={lanus} alt="Logo Municipalidad de Lanus" /></div>
            <div className="img_aliados"><img className="accenture" src={accenture} alt="Logo Accenture" /></div>
            <div className="img_aliados"><img className="lanus" src={pedidos} alt="Logo pedidos ya" /></div>
            <div className="img_aliados"><img className="lanus" src={arredos} alt="Logo Arredos" /></div>
           </div> */}
           
       </section>
    )
} 