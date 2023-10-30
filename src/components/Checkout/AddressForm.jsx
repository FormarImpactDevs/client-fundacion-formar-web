import React from "react";
import { useState } from "react";
import {
  Radio,
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
  const [radioValue, setRadio] = useState("");

  const handleRadioChange = (event) => {
    setRadio(event.target.value);
  };

  const [row, setRow] = useState(true);
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
            value = ""
            name="mail"
            label="Mail"
            fullWidth
            autoComplete="correo electronico"
            variant="standard"
          />
        </Grid>
        <Grid
                item
                xs={12}
                container
                justifyContent="flex-center"
                sx={{ m: 0 }}
              >  <Typography variant="h3">
              Como lo recibo o retiro
             </Typography>
             <Typography variant="h5" gutterBottom>
             Elegí el punto de retiro gratuito que te convenga y te 
             contactaremos para coordinar la entrega. 
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
                      <Grid item xs={12} sm={5}>
                        <FormControlLabel
                          value="puntoDeRetiro"
                          control={<Radio size="small" />}
                          label="Punto de retiro"
                          labelPlacement="end"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControlLabel
                          value="donante"
                          control={<Radio size="small" />}
                          label="Envio"
                        />
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </FormControl>
              </Grid>
              {radioValue && radioValue === "puntoDeRetiro" ? (
  <div className="checkboxes">
    <Box sx={{ display: "flex" }}>
      <FormControl
        sx={{ m:3 }}
        row
        component="fieldset"
        variant="standard"
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between" // Espacio entre las dos columnas
          alignItems="flex-start" // Alineación superior
        >
          <RadioGroup
           name="PuntoDeRetiroSelection" value={radioValue} onChange={handleRadioChange}>
          <Grid item xs={12} sm={6}>
           
              <FormControlLabel
                row
                value="FlorestaCABA"
                control={<Radio size="small" name="FlorestaCABA" />}
                label="Floresta CABA"
              />
              <FormControlLabel
                row
                value="Boulogne"
                control={<Radio size="small" name="Boulogne" />}
                label="Boulogne"
              />
           
          </Grid>
          <Grid item xs={12} sm={6}>
            
              <FormControlLabel
                row
                value="PoloDePalermo"
                control={<Radio size="small" name="PoloDePalermo" />}
                label="Polo de Palermo CABA"
              />
              <FormControlLabel
                row
                value="Benavidez"
                control={<Radio size="small" name="Benavidez" />}
                label="Benavidez"
              />
          </Grid>
          </RadioGroup>
        </Grid>
      </FormControl>
    </Box>
  </div>
) : null}
 </Grid>
</React.Fragment>
  );
}
