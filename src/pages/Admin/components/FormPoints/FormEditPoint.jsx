import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  updatePointService,
  getPointServiceById,
} from "../../../../services/points.service";
// Componentes
import { Loading } from "../../../../components/Loading";

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

export const FormEditPoint = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [point, setPoint] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //obtener punto de retiro por id
  const getPointById = async (id) => {
    console.log(id);
    try {
      const pointData = await getPointServiceById(id);
      setPoint(pointData);
      console.log(pointData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPointById(id);
    if (point != undefined) {
      setIsLoading(false);
    }
  }, [id]);
  
  const { nombre, descripcion, telefono } = point

  const getInitialValues = () => ({
    id: id,
    nombre: nombre,
    descripcion: descripcion,
    telefono: telefono,
  });

  const getValidationSchema = () =>
    Yup.lazy(() =>
      Yup.object({
        nombre: Yup.string().required(
          "El campo punto de retiro es obligatorio."
        ),
      })
    );

  const onSubmit = async (values) => {
    try {
      const data = await updatePointService(values);

      Swal.fire({
        icon: "success",
        title: "¡Punto de retiro actualizado con éxito!",
        text: data.message,
      }).then(() => {
        navigate("/admin/points");
      });
    } catch (error) {
      if (error) {
        Swal.fire({
          icon: "error",
          title: "¡Hubo un error al actualizar el punto de retiro!",
          text: error.message,
        });
      }
    }
  };

  const { handleSubmit, values, setFieldValue, errors, isValid, dirty } =
    useFormik({
      validateOnBlur: false,

      validateOnChange: true,

      initialValues: getInitialValues(),

      validationSchema: getValidationSchema(),

      onSubmit,
    });

  return (
    <>
      {!isLoading ? (
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
            <h1 className="subtitle">ACTUALIZAR PUNTO DE RETIRO</h1>
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
                    <CssTextField
                      required
                      fullWidth
                      id="nombre"
                      label="Punto de retiro"
                      name="nombre"
                      value={values.nombre}
                      error={errors?.nombre && true}
                      helperText={errors?.nombre ? errors.nombre : ""}
                      onChange={(e) => setFieldValue("nombre", e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <CssTextField
                      fullWidth
                      id="telefono"
                      label="Teléfono"
                      name="telefono"
                      value={values.telefono}
                      defaultValue={values.telefono}
                      onChange={(e) =>
                        setFieldValue("telefono", e.target.value)
                      }
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
                      label="Descripción adicional del punto de retiro"
                      name="descripcion"
                      multiline
                      rows={4}
                      defaultValue={values.descripcion || ""}
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
                    disabled={!(isValid && dirty)}
                  >
                    Guardar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};
