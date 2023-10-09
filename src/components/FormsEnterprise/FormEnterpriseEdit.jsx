import { useParams } from "react-router-dom";
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
import {
  getEnterpriseServiceById,
  updateEnterpriseService,
} from "../../services/enterprises.service";
import Swal from "sweetalert2";

/* Formik y Yup */
import { /* Field, Form, */ useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";

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
  const { id } = useParams();

  const [initialValues, setInitialValues] = useState({
    id: "",
    nombre: "", 
    descripcion: "", 
    foto_card: "",
    foto_emprendimiento: "",
  });
  const [isLoading, setIsLoading] = useState(true);


  

  useEffect(() => {
    const getEnterpriseById = async (enterpriseId) => {
      setIsLoading(true)
  
      try {
        const { id, nombre, descripcion, foto_card, foto_emprendimiento} = await getEnterpriseServiceById(enterpriseId);
        setInitialValues({
          id,
          nombre, 
          descripcion, 
          foto_card,
          foto_emprendimiento,
        });
      } catch (error) {
        console.log(error);
      } finally {
      setIsLoading(false)
  
      }
    };

    getEnterpriseById(id);
  }, [id]);

    
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
      formDataToSend.append("id", values.id);
      formDataToSend.append("nombre", values.nombre);
      formDataToSend.append("descripcion", values.descripcion);
      formDataToSend.append("foto_card", values.foto_card);
      formDataToSend.append("foto_emprendimiento", values.foto_emprendimiento);

      const data = await updateEnterpriseService(id, formDataToSend);
      await Swal.fire({
        icon: "success",
        title: "¡Emprendimiento actualizado!",
        text: data.message,
      });
      setTimeout(() => {
        window.location = "/admin/enterprises";
      }, 2000);
    } catch (error) {
      if (error) {
        Swal.fire({
          icon: "error",
          title: "¡Hubo un error al actualizar el emprendimiento!",
          text: error.message,
        });
      }
    }
  };
  console.log(initialValues)

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    setFieldValue,
    errors,
    setValues
  } = useFormik({
    validateOnBlur: true,

    validateOnChange: true,

    initialValues,

    validationSchema: getValidationSchema(),

    onSubmit,
  });

  useEffect(() => {
    // Actualizamos los valores de Formik una vez que los datos estén disponibles
    if (!isLoading) {
      setValues(initialValues);
    }
  }, [isLoading, initialValues, setValues]);

  if(isLoading) {
    return (
      <h1>Cargando</h1>
    )
  }
  console.log(values)
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
          method="PUT"
          encType="multipart/form-data"
        >
          <div className="mb-2">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <InputFileUpload
                  text="Foto para la card del emprendimiento"
                  name="foto_card"
                  value={values.foto_card}
                  multiple={false}
                  required={false}
                  onChange={setFieldValue}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputFileUpload
                  text="Foto del emprendimiento"
                  name="foto_emprendimiento"
                  value={values.foto_emprendimiento}
                  multiple={false}
                  required={false}
                  onChange={setFieldValue}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <CssTextField
                  required
                  fullWidth
                  id="nombre"
                  label="Nombre del emprendimiento"
                  name="nombre"
                  value={values.nombre}
                  /* value={nombre} */
                  error={errors?.nombre && true}
                  helperText={errors?.nombre ? errors.nombre : ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  value={values.descripcion}
                  /* value= */
                  error={errors?.descripcion && true}
                  helperText={errors?.descripcion ? errors.descripcion : ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
