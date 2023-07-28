import "./done.scss";
import Button from "@mui/material/Button";

export const Done = () => {
  return (
    <section className="container container-done">
      <div className="flex">
        <div className="titlesDone">
          <h2 className="title">LA EDUCACIÓN</h2>
          <h1 className="title">
            NO PUEDE <br /> ESPERAR
          </h1>
        </div>
        <div className="a-center">
          <div className="containerP">
            <p className="subtitle">Vos podes ser puente</p>
            <p className="subtitle">hacia el mundo del </p>
            <p className="subtitle">trabajo, Sumate!</p>
          </div>

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
        </div>
      </div>
    </section>
  );
};
