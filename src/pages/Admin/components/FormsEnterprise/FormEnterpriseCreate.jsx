import {
  Button,
  Box,
  CssBaseline,
  Container,
  Grid,
  TextField,
  styled,
} from "@mui/material";
import "../../../../components/Form/formDates.scss";

import InputFileUpload from "../../../../components/InputFileUpload";
import Swal from "sweetalert2";

/* Formik y Yup */
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { createEnterpriseService } from "../../../../services/enterprises.service";

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
  /* Formik */
  const navigate = useNavigate();

  const getInitialValues = () => ({
    nombre: "",
    descripcion: "",
    foto_card: "",
    foto_emprendimiento: "",
  });

  const getValidationSchema = () =>
    Yup.lazy(() =>
      Yup.object({
        nombre: Yup.string().required("El campo nombre es obligatorio."),
        descripcion: Yup.string().required("Se requiere de una descripción."),
      })
    );

  const onSubmit = async (values) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("nombre", values.nombre);
      formDataToSend.append("descripcion", values.descripcion);
      formDataToSend.append("foto_card", values.foto_card);
      formDataToSend.append("foto_emprendimiento", values.foto_emprendimiento);

      const data = await createEnterpriseService(formDataToSend);

      Swal.fire({
        icon: "success",
        title: "¡Emprendimiento creado!",
        text: data.message,
      }).then(() => {
          navigate("/admin/enterprises");
      })
    } catch (error) {
      if (error) {
        Swal.fire({
          icon: "error",
          title: "¡Hubo un error al crear el emprendimiento!",
          text: error.message,
        });
      }
    }
  };

  const { handleSubmit, values, setFieldValue, errors } = useFormik({
    validateOnBlur: false,

    validateOnChange: false,

    initialValues: getInitialValues(),

    validationSchema: getValidationSchema(),

    onSubmit,
  });

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
                <InputFileUpload
                  text="Foto para la card del emprendimiento"
                  name="foto_card"
                  multiple={false}
                  required={false}
                  onChanges={setFieldValue}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputFileUpload
                  text="Foto del emprendimiento"
                  name="foto_emprendimiento"
                  multiple={false}
                  required={false}
                  onChanges={setFieldValue}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <CssTextField
                  required
                  fullWidth
                  id="nombre"
                  label="Nombre del emprendimiento"
                  name="nombre"
                  error={errors?.nombre && true}
                  helperText={
                    errors?.nombre
                      ? errors.nombre
                      : ""
                  }
                  onChange={(e) => setFieldValue("nombre", e.target.value)}
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
                  error={errors?.descripcion && true}
                  helperText={
                    errors?.descripcion
                      ? errors.descripcion
                      : ""
                  }
                  onChange={(e) => setFieldValue("descripcion", e.target.value)}
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
