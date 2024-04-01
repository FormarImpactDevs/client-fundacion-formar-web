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

export const FormProductEdit = () => {
  const { id } = useParams();
  const { categories } = useContext(CategoryContext);
  const { enterprises } = useContext(EnterpriseContext);
  const [formInitialValues, setFormInitialValues] = useState() 

  const navigate = useNavigate();
  const { getProductById, product, loading } = useContext(ProductContext);

  useEffect(() => {
    getProductById(id);
  }, []);

  useEffect(() => {
    formik.setValues({
      id: product?.id || "",
      nombre: product?.nombre || "",
      precio: product?.precio || "",
      descripcion: product?.descripcion || "",
      descuento: product?.descuento || "",
      stock: product?.stock || "",
      emprendimientos_id: product?.emprendimientos_id || "",
      categoria_id: product?.categoria_id || "",
      images: product?.images || [],
    });
  }, [product]);

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
      if (formik.isValid) {
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


  const formik = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      id: "",
      nombre: "",
      precio: "",
      descripcion: "",
      descuento: "",
      stock: "",
      emprendimientos_id: "",
      categoria_id: "",
      images: [],
    },
    validationSchema: getValidationSchema(),
    onSubmit,
  });

  const handleImageChange = (name, selectedImages) => {
    formik.setFieldValue(name, selectedImages);
  };

  return (
    <>
      <ButtonGoToBack />
      {!loading ? (
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
              validationSchema={getValidationSchema()}
              onSubmit={onSubmit}
            >
              <Box
                component="form"
                noValidate
                onSubmit={formik.handleSubmit}
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
                          value={formik.values?.nombre || ""}
                          defaultValue={formik.values?.nombre}
                          error={formik.errors?.nombre && true}
                          helperText={formik.errors?.nombre ? formik.errors.nombre : ""}
                          onChange={(e) =>
                            formik.setFieldValue("nombre", e.target.value)
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <CssTextField
                          required
                          fullWidth
                          id="precio"
                          label="Precio del producto"
                          name="precio"
                          value={formik.values?.precio}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                $
                              </InputAdornment>
                            ),
                          }}
                          error={formik.errors?.precio && true}
                          helperText={formik.errors?.precio ? formik.errors.precio : ""}
                          onChange={(e) =>
                            formik.setFieldValue("precio", e.target.value)
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
                          value={formik.values?.descripcion}
                          defaultValue={formik.values?.descripcion}
                          error={formik.errors?.descripcion && true}
                          helperText={
                            formik.errors?.descripcion ? formik.errors.descripcion : ""
                          }
                          onChange={(e) =>
                            formik.setFieldValue("descripcion", e.target.value)
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
                          value={formik.values?.descuento}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                %
                              </InputAdornment>
                            ),
                          }}
                          error={formik.errors?.descuento && true}
                          helperText={formik.errors?.descuento ? formik.errors.descuento : ""}
                          onChange={(e) =>
                            formik.setFieldValue("descuento", e.target.value)
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
                          value={formik.values?.stock}
                          error={formik.errors?.stock && true}
                          helperText={formik.errors?.stock ? formik.errors.stock : ""}
                          onChange={(e) =>
                            formik.setFieldValue("stock", e.target.value)
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
                          value={formik.values?.emprendimientos_id}
                          label="Emprendimiento"
                          sx={{ width: "100%" }}
                          onChange={(e) =>
                            formik.setFieldValue("emprendimientos_id", e.target.value)
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
                          value={formik.values?.categoria_id}
                          label="Categoría"
                          sx={{ width: "100%" }}
                          onChange={(e) =>
                            formik.setFieldValue("categoria_id", e.target.value)
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
                        disabled={!(formik.isValid && formik.dirty)}
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
              {product?.images?.map((image, index) => (
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