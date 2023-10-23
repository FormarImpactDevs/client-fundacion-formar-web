import React from "react";
import { useState } from "react";
import {
  Radio,
  FormGroup,
  FormControlLabel,
  FormControl,
  RadioGroup,
  TextField,
  Typography,
  Grid,
  Box,
  styled,
} from "@mui/material";

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

export default function AddressForm() {
  const [radio, setRadio] = useState("");

  const handleRadioChange = (event) => {
    setRadio(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom className="typography">
        Ingresá tus datos
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nombre"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Apellido"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dni"
            name="dni"
            label="DNI"
            fullWidth
            autoComplete="numero de dni"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mail"
            mail="mailto@.com"
            name="mail"
            label="Mail"
            fullWidth
            autoComplete="correo electronico"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" alignItems="center">
         
          <Typography variant="h3" sx={{ whiteSpace: 'nowrap' }}>Como lo recibo o retiro</Typography>
          <Typography variant="h5" gutterBottom>
            Elegí el punto de retiro gratuito que te convenga y te contactaremos
            para coordinar la entrega.
          </Typography>
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
                <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    value="puntoDeRetiro"
                    control={<Radio size="small" />}
                    label="Punto de retiro"
                  />
                </Grid>
             </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    value="Envio"
                    control={<Radio size="small" />}
                    label="Envio"
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
        {radio && radio === "puntoDeRetiro" ? (
          <Grid item xs={12} sm={6}>
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
                    <Grid item xs={6} sm={6}>
                      <FormGroup>
                        <FormControlLabel
                          control={<Radio size="small" name="FlorestaCABA" />}
                          label="Floresta (CABA)"
                        />
                        <FormControlLabel
                          control={<Radio size="small" name="Boulogne" />}
                          label="Boulogne"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <FormGroup>
                        <FormControlLabel
                          control={<Radio size="small" name="PoloDePalermo" />}
                          label="Polo de Palermo CABA"
                        />
                        <FormControlLabel
                          control={<Radio size="small" name="Benavidez" />}
                          label="Benavidez"
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
                </FormControl>
              </Box>
            </div>
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </React.Fragment>
  );
}
