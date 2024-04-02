import {
  Button,
  Box,
  CssBaseline,
  Container,
  Grid,
  TextField,
  styled,
  InputAdornment,
} from "@mui/material";
import "../../../../components/Form/formDates.scss";
import Swal from "sweetalert2";
import InputFileMultiple from "../../../../components/InputFileMultiple";
import { useCategories } from "../../../../hooks/category/useCategory";
import { useEnterprises } from "../../../../hooks/enterprise/useEnterprise";
import SelectInput from "../../../../components/SelectInput";
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

export const FormProductCreate = () => {
  const { categories } = useCategories();
  const { enterprises } = useEnterprises();
  /* Formik */
  const navigate = useNavigate();
  const getInitialValues = () => ({
    nombre: "",
    precio: "",
    descripcion: "",
    descuento: 0,
    stock: 1,
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

  const { handleSubmit, values, setFieldValue, errors, isValid, dirty } =
    useFormik({
      validateOnBlur: false,

      validateOnChange: false,

      initialValues: getInitialValues(),

      validationSchema: getValidationSchema(),

      onSubmit,
    });

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
                  <SelectInput
                    label="Seleccione un emprendimiento"
                    options={enterprises}
                    value={values.emprendimientos_id}
                    onChange={(e) =>
                      setFieldValue("emprendimientos_id", e.target.value)
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
                  <SelectInput
                    label="Seleccione una categoría"
                    options={categories}
                    value={values.categoria_id}
                    onChange={(e) =>
                      setFieldValue("categoria_id", e.target.value)
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
    </>
  );
};
