import accenture from "../../assets/accenture.png"
import dh from "../../assets/dh.png";
import santander from "../../assets/santander.png";
import sanMiguel from "../../assets/sanmiguel.png";
import empower from "../../assets/empower.png";
import pampaEnergia from "../../assets/pampaenergia.png"
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
      img: pampaEnergia,
     
    },
    {
      img: accenture,
      
    },
    {
      img: empower,
      
    },
  
   
  ];
    return (
        <section className="aliadosp_container">
            <Title text="Hacen posible este programa  "/>
            <Subtitle text="Empresas y organizaciones comprometidas con la inclusión laboral en el sector IT" />
            <div className="row">        
                    <Slide3d list={cardsInfo}  />
                  </div>
       </section>
    )
} 