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
        </Button></a>
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
      </div>
    </section>
  );
};
