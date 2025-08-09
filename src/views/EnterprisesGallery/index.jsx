import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Slide3d from "../../components/Slider3d_2.0";
import KitNewJoiners from "../../assets/enterprisesGallery/Accenture_canasta.jpg";
import Fratersivo from "../../assets/enterprisesGallery/emp_sublimacion.jpeg";
import JardinDeLosSueños from "../../assets/enterprisesGallery/jardin_de_los_sueños.jpg";
import HimaEmp from "../../assets/enterprisesGallery/hima.jpg";
import CosturerasDeIAPI from "../../assets/enterprisesGallery/iapi.jpg";
import ViapisEmp from "../../assets/enterprisesGallery/viapis.jpg";
import PedroEmp from "../../assets/enterprisesGallery/pedro.jpg";
import Title from "../../components/Title";

const cardsInfo = [
  {
    img: KitNewJoiners,
    name: "Kit New Joiners Accenture",
    description: "Un regalo que hace bien",
    video: "https://www.youtube.com/embed/D7NqKYn_-nM",
    type: "person",
  },
  {
    img: Fratersivo,
    name: "Fratersivo",
    description: "Emprendimiento de sublimación",
    video: "https://youtube.com/embed/ae3s7c5i17E",
    type: "person",
  },
  {
    img: JardinDeLosSueños,
    name: "Jardín de los sueños",
    description: "Emprendimiento de suculentas",
    video: "https://youtube.com/embed/tIkyquwbUno",
    type: "person",
  },
  {
    img: HimaEmp,
    name: "HIMA",
    description: "Emprendimiento de carpintería",
    video: "https://youtube.com/embed/uXjNcmzZT7E",
    type: "person",
  },
  {
    img: CosturerasDeIAPI,
    name: "Costureras de IAPI",
    description: "Emprendimiento de costura",
    video: "https://youtube.com/embed/rKgtPBC8aX0",
    type: "person",
  },
  {
    img: ViapisEmp,
    name: "VIAPIS",
    description: "Emprendimiento de gastronomía",
    video: "https://youtube.com/embed/ggA6uRw2AbA",
    type: "person",
  },
  {
    img: PedroEmp,
    name: "Pedro, talento argentino",
    description: "Talento Argentino",
    video: "https://www.youtube.com/embed/BQ47fVwxzCk",
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
        
          height="315"
          src={videoUrl}
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            margin:" 5rem 0",
            padding: "0 3rem",
          }}
        />
       
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
     
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
