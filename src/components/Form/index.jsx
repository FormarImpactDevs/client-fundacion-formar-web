import { useState } from "react";
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

export const Form = () => {
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
        <h1 className="subtitle">TUS DATOS DE CONTACTO</h1>
        <Box
          component="form"
          /* onSubmit={handleSubmit} */ action="https://formsubmit.co/21609fc7321079558debce8e5d3027fe"
          method="POST"
          sx={{ mt: 2 }}
        >
          <div className="mb-2">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  name="firstName"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <CssTextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  required
                  fullWidth
                  id="telephone"
                  label="Teléfono"
                  name="telephone"
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

              <Grid>
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
                      sx={{ ml: 3 }}
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
              <CssTextField
                type="hidden"
                name="_next"
                value="http://127.0.0.1:5173/"
              />
            </Grid>
            <Grid item xs={12} sm={6} className="d-none">
              <CssTextField type="hidden" name="_captcha" value="false" />
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
        </Box>
      </Box>
    </Container>
  );
};
