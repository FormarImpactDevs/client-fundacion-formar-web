import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, 
  Box, 
  Button, 
  Container, 
  CssBaseline, 
  Grid, 
  TextField, 
  Typography, 
  createTheme,
   ThemeProvider } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../Service/authService';
import '../LoginEcommerce/_loginEcommerce.scss';

function LoginEcommerce() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Correo electrónico no válido').required('Campo requerido'),
    password: Yup.string().required('Campo requerido'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await login(values.email, values.password);
        navigate('/');
      } catch (error) {
        formik.setFieldError('password', 'Contraseña o email incorrecto');
      }
    },
  });

const defaultTheme = createTheme();

return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingresar
          </Typography>
          <form onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <Typography variant="body2" color="error">
                {formik.errors.email}
              </Typography>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <Typography variant="body2" color="error">
                {formik.errors.password}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Acceder
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidó su contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  ¿No tienes cuenta? Crear cuenta
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginEcommerce;