import { useState } from "react";
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
import { updateEnterpriseService } from "../../services/enterprises.service";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

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

export const FormEnterpriseEdit = () => {
    const id = useParams()
    console.log(id);
  /* const [dataEnterprise, setDataEnterprise] = useState({
    nombre: "",
    descripcion: "",
    fotoCard: "",
    fotoEmprendimiento: "",
  }); */
  const [sending, setSending] = useState(false);

  const { formValues, handleInputChange, reset } = useForm({
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
    /*  const data = new FormData(event.currentTarget); */
    /* createEnterpriseService */
    /* const { nombre, descripcion, fotoCard, fotoEmprendimiento } = data; */
    /*     setDataEnterprise({
      nombre: data.get("nombre"),
      descripcion: data.get("descripcion"),
      fotoCard: data.get("foto-card"),
      fotoEmprendimiento: data.get("foto-emprendimiento"),
    });
    console.log(dataEnterprise); */
    console.log(nombre, descripcion, foto_card, foto_emprendimiento);

    try {
      setSending(true);

      const { data } = await updateEnterpriseService({
        id: id,
        nombre,
        descripcion,
        foto_card,
        foto_emprendimiento,
      });

      setSending(false);

      Swal.fire({
        icon: "info",
        title: "¡Emprendimiento creado!",
        text: data.msg,
      });

      reset();

    } catch (error) {
      console.log(error.message);
      reset();
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
        <h1 className="subtitle">EDITAR EMPRENDIMIENTO</h1>

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
                <InputFileUpload
                  text="Foto para la card del emprendimiento"
                  name="foto_card"
                  multiple={false}
                  required={true}
                  onChanges={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputFileUpload
                  text="Foto del emprendimiento"
                  name="foto_emprendimiento"
                  multiple={false}
                  required={false}
                  onChanges={handleInputChange}
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
