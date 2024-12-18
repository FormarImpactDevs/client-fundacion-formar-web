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
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  getCategoryServiceById,
  updateCategoriesService,
} from "../../../../services/categories.service";
import { ButtonGoToBack } from "../../../../components/ButtonGoToBack";
import { MainLayout } from "../../../../layout/index";

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

export const FormCategoryEdit = () => {
  const { id } = useParams();
  const [sending, setSending] = useState(false);
  const [category, setCategory] = useState({ nombre: "" });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategory(id) {
      try {
        const data = await getCategoryServiceById(id);
        setCategory(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCategory(id);
  }, [id]);

  useEffect(() => {
    formik.setValues({
      nombre: category?.nombre || "",
    });
  }, [category]);

  const initialValues = {
    nombre: category.nombre || "",
  };

  const onSubmit = async (values) => {
    try {
      setSending(true);

      const response = await updateCategoriesService(id, {
        id,
        nombre: values.nombre,
      });

      setSending(false);

      Swal.fire({
        icon: "info",
        title: "¡Categoría editada!",
        text: response.msg,
      }).then(() => {
        navigate("/admin/categories");
      });
    } catch (error) {
      console.error(error.message);
      Swal.fire({
        icon: "error",
        title: "¡Hubo un error al actualizar la categoría!",
        text: error.msg,
      });
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate: (values) => {
      const errors = {};
      if (!values.nombre.trim()) {
        errors.nombre = "El nombre de la categoría es requerido";
      }
      return errors;
    },
  });

  return (
    <>
      <MainLayout>
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
            <h1 className="subtitle">EDITAR CATEGORÍA</h1>

            <form
              noValidate
              onSubmit={formik.handleSubmit}
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
                      label="Nombre de la categoría"
                      name="nombre"
                      value={formik.values.nombre}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.nombre && Boolean(formik.errors.nombre)
                      }
                      helperText={formik.touched.nombre && formik.errors.nombre}
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
            </form>
          </Box>
        </Container>
      </MainLayout>
    </>
  );
};
