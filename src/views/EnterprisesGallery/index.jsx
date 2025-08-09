import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Slide3d from "../../components/Slider3d_2.0";
import JardinDeLosSueños from "../../assets/jardin_de_los_sueños.png";
import Title from "../../components/Title";

const cardsInfo = [
  {
    img: JardinDeLosSueños,
    name: "Primer Emprendimiento 1",
    description: "Descripción 1",
    video: "https://youtube.com/embed/tIkyquwbUno",
    type: "person",
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Emprendimiento 2",
    description: "Descripción 2",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "person",
  },
  {
    img: JardinDeLosSueños,
    name: "Emprendimiento 1",
    description: "Descripción 1",
    video: "https://youtube.com/embed/tIkyquwbUno",
    type: "person",
  },
  {
    img: JardinDeLosSueños,
    name: "Emprendimiento 1",
    description: "Descripción 1",
    video: "https://youtube.com/embed/tIkyquwbUno",
    type: "person",
  },
  {
    img: JardinDeLosSueños,
    name: "Emprendimiento 1",
    description: "Descripción 1",
    video: "https://youtube.com/embed/tIkyquwbUno",
    type: "person",
  },
  {
    img: JardinDeLosSueños,
    name: "Emprendimiento 1",
    description: "Descripción 1",
    video: "https://youtube.com/embed/tIkyquwbUno",
    type: "person",
  },
];

export default function EnterprisesGallery() {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleOpenVideo = (url) => {
    setVideoUrl(url);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Title text={"Conocé los emprendimientos que acompañamos"} />
      <Slide3d
        list={cardsInfo}
        type="person"
        onCardClick={handleOpenVideo}
        autoplay={false}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "90vw",
            height: "80vh",
            maxWidth: "none",
            maxHeight: "none",
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <iframe
          width="80%"
          height="315"
          src={videoUrl}
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            marginTop: "5rem",
            padding: "1em;",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <div style={{ textAlign: "center", margin: "1rem 0" }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </Dialog>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          size="large"
          className="button"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1rNjqYv6h5xnTvs-7UIA9Q3PPaDfMBLLp/view",
              "_blank"
            )
          }
          sx={{
            color: "secondary.light",
            margin: "0 auto",
          }}
        >
          Conocé a nuestros emprendedores
        </Button>
      </div>
    </div>
  );
}
