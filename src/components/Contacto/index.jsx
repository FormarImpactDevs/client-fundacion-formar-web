import "./_contacto.scss";
import Button from "@mui/material/Button";
import Subtitle from "../Subtitle";

export const Contacto = () => {
  return (
    <section className="contacto_container">
      <div className="flex">
        <div className="titles_contact">
          <Subtitle text="Si no encontraste lo que buscabas en" />
          <br />
          <Subtitle text="nuestra web, contanos en qué podemos" />
          <br />
          <Subtitle text="ayudarte y nos contactaremos en la brevedad." />
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
            <a href={"https://wa.me/5491169072681"} rel="noreferrer" target="_blank">
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
