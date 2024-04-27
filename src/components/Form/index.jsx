import React, { useState } from "react";
import {
  Button,
  Box,
  Checkbox,
  CssBaseline,
  Container,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormGroup,
  FormControlLabel,
  styled,
} from "@mui/material";
import "./formDates.scss";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

export const ContactForm = () => {
  const [radio, setRadio] = useState("");

  const handleRadioChange = (event) => {
    setRadio(event.target.value);
  };

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
        {/* title */}
        <h1 className="subtitle">TUS DATOS DE CONTACTO Prueba</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required('El nombre es requerido'),
            lastName: Yup.string().required('El apellido es requerido'),
            email: Yup.string().email('Formato de email inválido').required('El email es requerido'),
            phone: Yup.string().required('El teléfono es requerido'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values)
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
        <Form 
          action="https://formsubmit.co/formar@fundacionformar.ar"
          method="POST"
          sx={{ mt: 2 }}
        >
          <div className="mb-2">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  as={CssTextField}
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  name="firstName"
                  type="text"
                />
                <ErrorMessage name="firstName" component="div" className="error" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={CssTextField}
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  type="text"
                />
                <ErrorMessage name="lastName" component="div" className="error" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <CssTextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  type="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  required
                  fullWidth
                  id="phone"
                  label="Teléfono"
                  name="phone"
                  type="tel"
                />
              </Grid>

              <Grid
                item
                xs={12}
                container
                justifyContent="flex-center"
                sx={{ m: 3 }}
              >
                <h2 className="paragraph1">¿Cómo querés colaborar?</h2>
              </Grid>

              <Grid item xs={12} container
                justifyContent="center">
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={handleRadioChange}
                  >
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"                    
                    >
                      <Grid item xs={12} sm={6}>
                        <FormControlLabel
                          value="voluntario"
                          control={<Radio size="small" />}
                          label="Quiero ser voluntario"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControlLabel
                          value="donante"
                          control={<Radio size="small" />}
                          label="Quiero realizar una donación"
                        />
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </FormControl>
              </Grid>

              {radio && radio === "voluntario" ? (
                <div className="checkboxes">
                  <Box sx={{ display: "flex" }}>
                    <FormControl
                      sx={{ m: 3 }}
                      row
                      component="fieldset"
                      variant="standard"
                    >
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                      >
                        <Grid item xs={12} sm={6}>
                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox name="tutoriasDeIngles" />}
                              label="Tutorías de inglés"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox name="mentoriasEnHabilidadesTecnicas" />
                              }
                              label="Mentorías en habilidades técnicas"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox name="mentoriasEnHabilidadesBlandas" />
                              }
                              label="Mentorías en habilidades blandas"
                            />
                            <FormControlLabel
                              control={<Checkbox name="dictarUnaMasterclass" />}
                              label="Dictar una masterclass"
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          {" "}
                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox name="otro" />}
                              label="Otro"
                            />

                            <CssTextField
                              id="outlined-multiline-static"
                              multiline
                              rows={4}
                              name="message"
                              defaultValue=""
                            />
                          </FormGroup>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Box>
                </div>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12} sm={6} className="d-none">
              <Field type="hidden" name="_next" value="http://127.0.0.1:5173/" />
            </Grid>
            <Grid item xs={12} sm={6} className="d-none">
              <Field type="hidden" name="_captcha" value="false" />
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
                }}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Form>
        </Formik>
      </Box>
    </Container>
  );
};

