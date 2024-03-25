import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { ButtonGoToBack } from "../../../../components/ButtonGoToBack";
/* Formik y Yup */
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
// Componentes de contexto
import InputFileMultiple from "../../../../components/InputFileMultiple";
import { Loading } from "../../../../components/Loading";
/* import useProducts from "../../../../hooks/useProducts"; */
import { ProductContext } from "../../../../context/ProductContext";
import { CategoryContext } from "../../../../context/categoryContext/CategoryContext";
import { EnterpriseContext } from "../../../../context/EnterpriseContext/EnterpriseContext";
import { updateProductservice } from "../../../../services/products.service";

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
let initialValues;

export const FormProductEdit = () => {
  const { id } = useParams();
  const { categories } = useContext(CategoryContext);
  const { enterprises } = useContext(EnterpriseContext);

  const navigate = useNavigate();
  const { getProductById, product } = useContext(ProductContext);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id);
    if (product !== undefined && product !== null) {
      setLoading(false);
      
    }
  }, [id]);

  useEffect(() => {
    if (typeof product !== "undefined" && product !== null)
    initialValues = {
      id: product?.id,
      nombre: product?.nombre,
      precio: product?.precio,
      descripcion: product?.descripcion,
      descuento: product?.descuento,
      stock: product?.stock,
      emprendimientos_id: product?.emprendimientos_id,
      categoria_id: product?.categoria_id,
      images: product?.images || [],
    };
  }, [product])


  

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

        const data = await updateProductservice(id, formDataToSend);

        Swal.fire({
          icon: "success",
          title: "¡Producto actualizado!",
          text: data.message,
        }).then(() => {
          navigate("/admin/products");
        });
      }
    } catch (error) {
      if (error) {
        Swal.fire({
          icon: "error",
          title: "¡Hubo un error al actualizar el producto!",
          text: error.message,
        });
      }
    }
  };

  const { handleSubmit, values, setFieldValue, errors, isValid, dirty } =
    useFormik({
      validateOnBlur: false,

      validateOnChange: false,

      initialValues,

      validationSchema: getValidationSchema(),

      onSubmit,
    });

  const handleImageChange = (name, selectedImages) => {
    setFieldValue(name, selectedImages);
  };

  if (isLoading) return <Loading />

  return (
    <>
      <ButtonGoToBack />
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
            <h1 className="subtitle">EDITAR PRODUCTO</h1>

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
                <>
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
                          value={values?.nombre || ""}
                          defaultValue={values?.nombre}
                          error={errors?.nombre && true}
                          helperText={errors?.nombre ? errors.nombre : ""}
                          onChange={(e) =>
                            setFieldValue("nombre", e.target.value)
                          }
                        />
                        { values?.nombre }
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <CssTextField
                          required
                          fullWidth
                          id="precio"
                          label="Precio del producto"
                          name="precio"
                          value={values?.precio}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                $
                              </InputAdornment>
                            ),
                          }}
                          error={errors?.precio && true}
                          helperText={errors?.precio ? errors.precio : ""}
                          onChange={(e) =>
                            setFieldValue("precio", e.target.value)
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
                          label="Descripción del producto"
                          name="descripcion"
                          multiline
                          rows={4}
                          value={values?.descripcion}
                          defaultValue={values?.descripcion}
                          error={errors?.descripcion && true}
                          helperText={
                            errors?.descripcion ? errors.descripcion : ""
                          }
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
                          value={values?.descuento}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                %
                              </InputAdornment>
                            ),
                          }}
                          error={errors?.descuento && true}
                          helperText={errors?.descuento ? errors.descuento : ""}
                          onChange={(e) =>
                            setFieldValue("descuento", e.target.value)
                          }
                        />
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <CssTextField
                          required
                          fullWidth
                          id="stock"
                          label="Stock"
                          name="stock"
                          value={values?.stock}
                          error={errors?.stock && true}
                          helperText={errors?.stock ? errors.stock : ""}
                          onChange={(e) =>
                            setFieldValue("stock", e.target.value)
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
                        <StyledInputLabel id="emprendimientos_id">
                          Seleccione un emprendimiento
                        </StyledInputLabel>
                        <StyledSelect
                          labelId="emprendimientos_id"
                          id="emprendimientos_id"
                          value={values?.emprendimientos_id}
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
                          value={values?.categoria_id}
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
                        disabled={!(isValid && dirty)}
                      >
                        Guardar
                      </Button>
                    </Grid>
                  </Grid>
                </>
              </Box>
            </Formik>
            <div className="containerImagenToEdit">
              <h2 className="subtitle">Imagenes actuales</h2>
              {product.images?.map((image, index) => (
                <figure className="imgFormEdit" key={index}>
                  <img src={image.imagen} alt={`Imagen del producto`} />
                  <figcaption>
                    <p>Fotos actuales</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Box>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};
