import "./_contacto.scss";
import Button from "@mui/material/Button";
import Subtitle from "../Subtitle";

export const Contacto = () => {
  return (
    <section className="contacto_container">
      <div className="flex">
        <div className="titles_contact">
          <Subtitle text="SI NO ENCONTRASTE LO QUE BUSCABAS EN" />
          <br />
          <Subtitle text="NUESTRA WEB, CONTANOS EN QUE PODEMOS" />
          <br />
          <Subtitle text="AYUDARTE Y NOS CONTACTAREMOS A LA BREVEDAD." />
          <br />
        </div>
        <div className="botones">
          <div className="boton_prensa">
            <a href="mailto:emprendimientosformar@gmail.com">
              {" "}
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
            </a>{" "}
          </div>
          <div >
            <a href={"https://wa.me/541136475116"}>
              {" "}
              <Button
                variant="outlined"
                size="large"
                className="button boton_wsp"
                sx={{
                  color: "primary.main",
                  backgroundColor: "secondary.light"
                }}
              >
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
