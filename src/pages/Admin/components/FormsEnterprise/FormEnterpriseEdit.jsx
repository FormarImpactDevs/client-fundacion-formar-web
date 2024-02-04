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
import "../../../../components/Form/formDates.scss";

import Swal from "sweetalert2";

/* Formik y Yup */
import { /* Field, Form, */ Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import InputFileUpload from "../../../../components/InputFileUpload";
import {
  getEnterpriseServiceById,
  updateEnterpriseService,
} from "../../../../services/enterprises.service";
import { useNavigate } from "react-router-dom";

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

const apiImgUrl = import.meta.env.VITE_BASE_IMG_ENTERPRISE_API_URL;
export const FormEnterpriseEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [enterprise, setEnterprise] = useState([]);

  const getEnterpriseById = async (id) => {
    try {
      const EnterpriseData = await getEnterpriseServiceById(id);
      const { nombre, descripcion, foto_card, foto_emprendimiento } =
        EnterpriseData;

      setEnterprise({
        nombre,
        descripcion,
        foto_card: `${apiImgUrl}/${foto_card}`,
        foto_emprendimiento: `${apiImgUrl}/${foto_emprendimiento}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEnterpriseById(id);
  }, [id]);

  const { nombre, descripcion, foto_card, foto_emprendimiento } = enterprise;

  const initialValues = {
    id: id,
    nombre: nombre,
    descripcion: descripcion,
    foto_card: foto_card,
    foto_emprendimiento: foto_emprendimiento,
  };
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
      Swal.fire({
        icon: "success",
        title: "¡Emprendimiento actualizado!",
        text: data.message,
      }).then(() => {
        navigate("/admin/enterprises");
      })
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

  const { handleSubmit, values, setFieldValue, errors } = useFormik({
    validateOnBlur: false,

    validateOnChange: false,

    initialValues: initialValues,

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
        <h1 className="subtitle">EDITAR EMPRENDIMIENTO</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={getValidationSchema()}
          onSubmit={onSubmit}
        >
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
                    values={foto_card}
                    multiple={false}
                    required={false}
                    onChanges={setFieldValue}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <InputFileUpload
                    text="Foto del emprendimiento"
                    name="foto_emprendimiento"
                    values={foto_emprendimiento}
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
                    defaultValue={nombre}
                    /* value={nombre} */
                    error={errors?.nombre && true}
                    helperText={errors?.nombre ? errors.nombre : ""}
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
                    defaultValue={descripcion}
                    /* value= */
                    error={errors?.descripcion && true}
                    helperText={errors?.descripcion ? errors.descripcion : ""}
                    onChange={(e) =>
                      setFieldValue("descripcion", e.target.value)
                    }
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
        </Formik>
        <div className="imgFormEdit">
          <img src={foto_card} alt="" />
        </div>
      </Box>
    </Container>
  );
};
