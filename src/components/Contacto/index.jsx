import "./_contacto.scss";
import Button from "@mui/material/Button";
import Subtitle from "../Subtitle";


export const Contacto = () => {
    return (
      <section className="contacto_container">
        <div className="flex">
          <div className="titles_contact">
            <Subtitle text= "SI NO ENCONTRASTE LO QUE BUSCABAS EN"/><br/>
            <Subtitle text= "NUESTRA WEB, CONTANOS EN QUE PODEMOS"/><br/>
            <Subtitle text= "AYUDARTE Y NOS CONTACTAREMOS A LA BREVEDAD."/><br/></div>
          <div className="botones">
          <div className="boton_prensa">
          <Button
          variant="contained"
          size="large"
          className="button"
          sx={{
            color: "secondary.light",
          }}
        >
          Prensa y comunicación
        </Button>
        </div>
        <div className="boton_wsp">
            <Button 
            
              variant="outlined"
              size="large"
              className="button"
              sx={{
                color:"primary.main",
              }}
            >
              WhatsApp
            </Button>
            </div>
            </div>
          
          </div>

        

      </section>
    );
  };
