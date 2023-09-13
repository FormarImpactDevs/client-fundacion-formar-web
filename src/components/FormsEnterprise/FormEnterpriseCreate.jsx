import { useEffect, useState } from "react";
import {
  Button,
  Box,
  CssBaseline,
  Container,
  Grid,
  TextField,
  styled,
} from "@mui/material";
import "../Form/formDates.scss";
import InputFileUpload from "../InputFileUpload";
import { createEnterpriseService } from "../../services/enterprises.service";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";

/* import { styled } from "@mui/material/styles"; */
/* import Button from "@mui/material/Button"; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";

/* import Box from "@mui/material/Box"; */
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";



const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

// boton con imagen
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#75aadb",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#75aadb",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#75aadb",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#75aadb",
    },
  },
});

export const FormEnterpriseCreate = () => {
  const [images, setImages] = useState([
    {
      url: "",
      width: "90%",
    },
  ]);

  const handleChange = (e) => {    
    setImages(() => [
      {
        url: URL.createObjectURL(e.target.files[0]),
        width: "90%",
      } 
    ]);
    return URL.revokeObjectURL(e.target.files[0]);

  };

  useEffect(() => {
    console.log(images);
  }, [images]);
  /* const [dataEnterprise, setDataEnterprise] = useState({
    nombre: "",
    descripcion: "",
    fotoCard: "",
    fotoEmprendimiento: "",
  }); */
  const [sending, setSending] = useState(false);

  const { formValues, handleInputChange, handleFileChange, reset } = useForm({
    nombre: "",
    descripcion: "",
    foto_card: "",
    foto_emprendimiento: "",
  });

  const { nombre, descripcion, foto_card, foto_emprendimiento } = formValues;

  const handleSubmit = async (event) => {
    event.preventDefault();

    /* if([nombre, descripcion, fotoCard].includes("")){
      handleShowAlert("Todos los campos son obligatorios");
      return null
    }; */

    /* const dataInputs = new FormData(); */

    const dataInputs = new FormData(event.currentTarget);
    /* createEnterpriseService */
    console.log({
      nombre: dataInputs.get("nombre"),
      descripcion: dataInputs.get("descripcion"),
      foto_card: dataInputs.append('foto_card', foto_card),
      fotoEmprendimiento: dataInputs.get("foto_emprendimiento"),
    });

    console.log(nombre, descripcion, foto_card, foto_emprendimiento);

    try {
      setSending(true);

      const { data } = await createEnterpriseService({
        nombre,
        descripcion,
        foto_card: dataInputs.append('foto_card', foto_card),
        foto_emprendimiento: dataInputs.append('foto_emprendimiento', foto_emprendimiento),
        /* nombre: dataInputs.get("nombre"),
        descripcion: dataInputs.get("descripcion"),
        foto_card: dataInputs.get("foto_card"),
        foto_emprendimiento: dataInputs.get("foto_emprendimiento"), */
      });

      setSending(false);

      Swal.fire({
        icon: "info",
        title: "¡Emprendimiento creado!",
        text: data.msg,
      });

      /* reset(); */
    } catch (error) {
      console.log(error);
      /* reset(); */
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          marginBottom: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "secondary.main",
          fontSize: "14px",
        }}
        className="containerForm"
      >
        <h1 className="subtitle">CREAR EMPRENDIMIENTO</h1>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
          maxWidth="xs"
          action=""
          method="POST"
          encType="multipart/form-data"
        >
          <div className="mb-2">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>

                {/* <InputFileUpload
                  text="Foto para la card del emprendimiento"
                  name="foto_card"
                  multiple={false}
                  required={true}
                  onChanges={handleInputChange}
                /> */}
                 <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%", justifyContent: "center" }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              <Button
                component="label"
                fullWidth
                variant="outline"
                sx={{ mt: 1, mb: 1, color: "secondary.light" }}
                startIcon={<FontAwesomeIcon icon={faFileArrowUp} />}
                href="#file-upload"
              >
                Foto para la card del emprendimiento
                <VisuallyHiddenInput
                  type="file"
                  name="foto_card"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => {handleChange(e), handleFileChange }}                  
                  multiple={false}
                  required={true}
                />
              </Button>
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputFileUpload
                  text="Foto del emprendimiento"
                  name="foto_emprendimiento"
                  multiple={false}
                  required={false}
                  onChanges={handleFileChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <CssTextField
                  required
                  fullWidth
                  id="nombre"
                  label="Nombre del emprendimiento"
                  name="nombre"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid
                item
                fullWidth
                xs={12}
                sm={12}
                justifyContent="flex-center"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "96%" },
                }}
              >
                <CssTextField
                  id="outlined-multiline-static"
                  label="Descripción del emprendimiento"
                  name="descripcion"
                  multiline
                  rows={4}
                  defaultValue=""
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
          </div>

          <Grid container justifyContent="flex-end" className="w-95">
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                size="medium"
                justifyContent="flex-end"
                className="button"
                disabled={sending}
                sx={{
                  color: "secondary.light",
                  mt: 3,
                  mb: 2,
                }}
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
