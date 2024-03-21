import "./done.scss";
import Button from "@mui/material/Button";

export const Done = () => {
  return (
    <section className="container container-done">
      <div className="flex">
        
        <div className="a-center">
 
          <div className="titlesDone">
            <h1 className="titleBlue">
              <span className="titleDark">Vos podes</span> ser puente {" "}
              <span className="titleDark">
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
              Sumate
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
