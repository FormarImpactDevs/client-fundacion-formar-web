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
import { createProductservice } from "../../../../services/products.service";
  
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
  
  export const FormProductCreate = () => {
    /* Formik */
    const getInitialValues = () => ({
    nombre: "",
    precio: "",
    descripcion: "",
    descuento: "",
    stock: "",
    emprendimientos_id: "",
    categoria_id: ""
    });
  
    const getValidationSchema = () =>
      Yup.lazy(() =>
        Yup.object({
          nombre: Yup.string().required("El campo nombre es obligatorio."),
          precio: Yup.string().required("El campo precio es obligatorio."),
          descripcion: Yup.string().required("Se requiere de una descripción."),
          stock: Yup.string().required("El campo stock es obligatorio."),
        })
      );
  
    const onSubmit = async (values) => {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append("id", values.id);
        formDataToSend.append("nombre", values.nombre);
        formDataToSend.append("precio", values.precio);
        formDataToSend.append("descripcion", values.descripcion);
        formDataToSend.append("descuento", values.descuento);
        formDataToSend.append("stock", values.stock);
        formDataToSend.append("emprendimientos_id", values.emprendimientos_id);
        formDataToSend.append("categoria_id", values.categoria_id);
  
        const data = await createProductservice(formDataToSend);
  
        Swal.fire({
          icon: "success",
          title: "Producto creado!",
          text: data.message,
        });
        setTimeout(() => {
          window.location = "/admin/products";
        }, 2000);
      } catch (error) {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "¡Hubo un error al crear el producto!",
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
          <h1 className="subtitle">CREAR PRODUCTO</h1>
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
                    text="Foto para la card del producto"
                    name="foto_card"
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
                    label="Nombre del producto"
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
                    label="Precio"
                    name="precio"
                    multiline
                    rows={4}
                    defaultValue=""
                    error={errors?.precio && true}
                    helperText={
                      errors?.precio
                        ? errors.precio
                        : ""
                    }
                    onChange={(e) => setFieldValue("precio", e.target.value)}
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
                    label="Descripción del producto"
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
                    label="Descuento"
                    name="descuento"
                    multiline
                    rows={4}
                    defaultValue=""
                    error={errors?.descuento && true}
                    helperText={
                      errors?.descuento
                        ? errors.descuento
                        : ""
                    }
                    onChange={(e) => setFieldValue("descuento", e.target.value)}
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
                    label="Stock"
                    name="stock"
                    multiline
                    rows={4}
                    defaultValue=""
                    error={errors?.stock && true}
                    helperText={
                      errors?.stock
                        ? errors.stock
                        : ""
                    }
                    onChange={(e) => setFieldValue("stock", e.target.value)}
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
                    label="Emprendimiento"
                    name="emprendimiento"
                    multiline
                    rows={4}
                    defaultValue=""
                    error={errors?.emprendimientos_id && true}
                    helperText={
                      errors?.emprendimientos_id
                        ? errors.emprendimientos_id
                        : ""
                    }
                    onChange={(e) => setFieldValue("emprendimiento", e.target.value)}
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
                    label="Categoria"
                    name="categoria"
                    multiline
                    rows={4}
                    defaultValue=""
                    error={errors?.categoria_id && true}
                    helperText={
                      errors?.categoria_id
                        ? errors.categoria_id
                        : ""
                    }
                    onChange={(e) => setFieldValue("categoria", e.target.value)}
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
  