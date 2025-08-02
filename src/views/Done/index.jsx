import "./done.scss";
import Button from "@mui/material/Button";
import done from "../../assets/Fotos web-13.png"
import doneMobile from "../../assets/voluntario-mobile.jpg"


export const Done = () => {
  return (
    <section className="container-done">
      
      <div className="donacion">
        <figure className="volunteer-image">
              <img
                src={done}
                alt="Imagen de estudiantes"
                className="presentation_img"
              />
        </figure>
        <figure className="volunteer-image-mobile">
              <img
                src={doneMobile}
                alt="Imagen de estudiantes"
                className="presentation_img"
              />
        </figure>
        <section className="flex">
          <div className="a-center">
 
          <div className="titlesDone">
            <h1 className="titleBlue">
              <span className="titleWhite">Vos podes</span> ser puente {" "}
              <span className="titleWhite">
                hacia el mundo del <br />
                trabajo, Sumate!
              </span>
            </h1>
          </div>

          <a href="#formVolunteer">
            <Button
              variant="outlined"
              size="large"
              className="button"
              sx={{
                color: "primary.main",
              }}
            >
              Sumate como voluntario!
            </Button>
          </a>
        </div>

        </section>
        
        
      </div>
    </section>
  );
};
