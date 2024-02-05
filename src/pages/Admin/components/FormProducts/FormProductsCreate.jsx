import { useContext, useState, useEffect } from "react";
import {
  Button,
  Box,
  CssBaseline,
  Container,
  Grid,
  TextField,
  styled,
  Select,
  MenuItem,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import "../../../../components/Form/formDates.scss";
import Swal from "sweetalert2";
import InputFileMultiple from "../../../../components/InputFileMultiple";
import { CategoryContext } from "../../../../context/categoryContext/CategoryContext";
import { EnterpriseContext } from "../../../../context/EnterpriseContext/EnterpriseContext";

/* Formik y Yup */
import { useFormik } from "formik";
import * as Yup from "yup";
import { createProductservice } from "../../../../services/products.service";
import { ButtonGoToBack } from "../../../../components/ButtonGoToBack";
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

const StyledSelect = styled(Select)({
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

const StyledInputLabel = styled(InputLabel)({
  color: "#75aadb",
});

export const FormProductCreate = () => {
  const { categories } = useContext(CategoryContext);
  const { enterprises } = useContext(EnterpriseContext);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  /* Formik */
  const navigate = useNavigate();
  const getInitialValues = () => ({
    nombre: "",
    precio: "",
    descripcion: "",
    descuento: "",
    stock: "",
    emprendimientos_id: "",
    categoria_id: "",
    images: [],
  });

  const getValidationSchema = () =>
    Yup.lazy(() =>
      Yup.object({
        nombre: Yup.string().required("El campo nombre es obligatorio."),
        precio: Yup.string().required("El campo precio es obligatorio."),
        descripcion: Yup.string().required("Se requiere de una descripción."),
        stock: Yup.string().required("El campo stock es obligatorio."),
        emprendimientos_id: Yup.string().required(
          "Es necesario asignarle un emprendimiento a este producto"
        ),
        categoria_id: Yup.string().required(
          "Es necesario asignarle una categoría a este producto"
        ),
      })
    );

  const onSubmit = async (values) => {
    try {
      if (isValid) {
        const formDataToSend = new FormData();
        formDataToSend.append("nombre", values.nombre);
        formDataToSend.append("precio", values.precio);
        formDataToSend.append("descripcion", values.descripcion);
        formDataToSend.append("descuento", values.descuento);
        formDataToSend.append("stock", values.stock);
        formDataToSend.append("emprendimientos_id", values.emprendimientos_id);
        formDataToSend.append("categoria_id", values.categoria_id);

        for (let i = 0; i < values.images.length; i++) {
          formDataToSend.append("images", values.images[i]);
        }

        const data = await createProductservice(formDataToSend);

        // Después de enviar los datos, deshabilitar el botón nuevamente
        setIsButtonDisabled(true);

        Swal.fire({
          icon: "success",
          title: "¡Producto creado!",
          text: data.message,
        }).then(() => {
          navigate("/admin/products");
        });
      }
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

  const { handleSubmit, values, setFieldValue, errors, isValid } = useFormik({
    validateOnBlur: false,

    validateOnChange: true,

    initialValues: getInitialValues(),

    validationSchema: getValidationSchema(),

    onSubmit,
  });

  // Manejar cambios en el formulario y actualizar el estado de isButtonDisabled
  const handleFormChange = () => {
    setIsButtonDisabled(!isValid);
  };
  useEffect(() => {
    handleFormChange();
  }, [isValid]);

  const handleImageChange = (name, selectedImages) => {
    setFieldValue(name, selectedImages);
  };

  return (
    <>
      <ButtonGoToBack />
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
                  <InputFileMultiple
                    text="Foto para la card del producto"
                    name="images"
                    multiple={true}
                    required={true}
                    onChanges={handleImageChange}
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
                    helperText={errors?.nombre ? errors.nombre : ""}
                    onChange={(e) => setFieldValue("nombre", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CssTextField
                    required
                    fullWidth
                    id="precio"
                    label="Precio del producto"
                    name="precio"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                    }}
                    error={errors?.precio && true}
                    helperText={errors?.precio ? errors.precio : ""}
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
                    helperText={errors?.descripcion ? errors.descripcion : ""}
                    onChange={(e) =>
                      setFieldValue("descripcion", e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <CssTextField
                    required
                    fullWidth
                    id="descuento"
                    label="Descuento"
                    name="descuento"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">%</InputAdornment>
                      ),
                    }}
                    error={errors?.descuento && true}
                    helperText={errors?.descuento ? errors.descuento : ""}
                    onChange={(e) => setFieldValue("descuento", e.target.value)}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <CssTextField
                    required
                    fullWidth
                    id="stock"
                    label="Stock"
                    name="stock"
                    error={errors?.stock && true}
                    helperText={errors?.stock ? errors.stock : ""}
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
                  <StyledInputLabel id="emprendimientos_id">
                    Seleccione un emprendimiento
                  </StyledInputLabel>
                  <StyledSelect
                    labelId="emprendimientos_id"
                    id="emprendimientos_id"
                    value={values.emprendimientos_id}
                    label="Emprendimiento"
                    sx={{ width: "100%" }}
                    onChange={(e) =>
                      setFieldValue("emprendimientos_id", e.target.value)
                    }
                  >
                    {enterprises.map((enterprise) => (
                      <MenuItem value={enterprise.id} key={enterprise.id}>
                        {enterprise.nombre}
                      </MenuItem>
                    ))}
                  </StyledSelect>
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
                  <StyledInputLabel id="categoria_id">
                    Seleccione una categoría
                  </StyledInputLabel>
                  <StyledSelect
                    labelId="categoria_id"
                    id="categoria_id"
                    value={values.categoria_id}
                    label="Categoría"
                    sx={{ width: "100%" }}
                    onChange={(e) =>
                      setFieldValue("categoria_id", e.target.value)
                    }
                  >
                    {categories.map((category) => (
                      <MenuItem value={category.id} key={category.id}>
                        {category.nombre}
                      </MenuItem>
                    ))}
                  </StyledSelect>
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
                  disabled={isButtonDisabled}
                >
                  Guardar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
