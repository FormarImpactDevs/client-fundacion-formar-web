import { useState } from "react";
import {
  Button,
  Box,
  CssBaseline,
  Container,
  Grid,
  TextField,
  styled,
} from "@mui/material";
import { useForm } from "../../../../hooks/useForm";
import Swal from "sweetalert2";
import { createCategoryService } from "../../../../services/categories.service";
import { useNavigate } from "react-router-dom";
import { ButtonGoToBack } from "../../../../components/ButtonGoToBack";

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

export const FormCategoryCreate = () => {
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();

  const { formValues, handleInputChange } = useForm({
    nombre: "",
  });

  const { nombre } = formValues;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSending(true);

      const { msg } = await createCategoryService({
        nombre,
      });

      Swal.fire({
        icon: "info",
        title: "Categoría creada!",
        text: msg,
      }).then(() => {
        navigate("/admin/categories");
      });
      setSending(false);
    } catch (error) {
      console.log(error);
    }
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
          <h1 className="subtitle">CREAR CATEGORÍA</h1>

          <form
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
                    label="Nombre de la categoría"
                    name="nombre"
                    value={nombre}
                    onChange={handleInputChange}
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
    </>
  );
};
