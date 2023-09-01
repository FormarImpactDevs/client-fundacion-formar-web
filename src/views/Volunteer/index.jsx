import Button from "@mui/material/Button";
import "./volunteer.scss";

export const Volunteer = () => {
  return (
    <section className="container-volunter" id="Volunteer">
      <div>
        <h1 className="titleBlue">
          Si trabajas en el sector IT{" "}
          <span className="titleDark">
            sumate como voluntario para potenciar la inserción laboral de los
            alumnos que acompañamos.
          </span>
        </h1>
      </div>

      <div className="center-around">
        <div className="button-volunter_left">
          <a href="#formVolunteer">
            <Button
              variant="contained"
              size="large"
              className="button"
              sx={{
                color: "secondary.light",
              }}
            >
              Sumate
            </Button>
          </a>
        </div>
        <div className="button-volunter_rigth">
          <a
            href="https://drive.google.com/file/d/10fwgCv4sOF4N8wjkcCuoYdbBFSDefi4h/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outlined"
              size="large"
              className="button"
              sx={{
                color: "primary.main",
              }}
            >
              Conocé más
            </Button>
          </a>
        </div>       
      </div>
    </section>
  );
};
