import "./_venturesFormar.scss";
import Title from "../Title";
import Slide3dIframe from "../Slider3dIframe";

export const VenturesFormar = () => {
  const cardsInfo = [
    {
      video: "https://www.youtube.com/embed/tIkyquwbUno?si=Qu3fe4qrH_-kK9ZW",
      name: "ACCENTURE",
      type: "person",
    },
    {
      video: "https://www.youtube.com/embed/tIkyquwbUno?si=Qu3fe4qrH_-kK9ZW",
      name: "FRATERSIVO",
      type: "person",
    },
    {
      video: "https://www.youtube.com/embed/tIkyquwbUno?si=Qu3fe4qrH_-kK9ZW",
      name: "JARDIN DE LOS SUEÑOS",
      type: "person",
    },
    {
      video: "https://youtu.be/uXjNcmzZT7E",
      name: "HIMA",
      type: "person",
    },
    {
      video: "https://youtu.be/rKgtPBC8aX0",
      name: "COSTURERAS IAPI",
      type: "person",
    },
    {
      video: "https://youtu.be/ggA6uRw2AbA ",
      name: "VIAPIS",
      type: "person",
    },
    {
      video: "https://youtube.com/shorts/BQ47fVwxzCk",
      name: "PEDRO TALENTO ARGENTINO",
      type: "person",
    },
  ];

  return (
    <div className="teamProgramming_container">
      <Title text="Conoce a los emprendimientos que acompañamos" />
      <div>
        <Slide3dIframe list={cardsInfo} type={"person"} />
      </div>
    </div>
  );
};
