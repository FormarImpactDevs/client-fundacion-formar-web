import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./checkout.scss";


export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className='typography'>
       Direccion de envio
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
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Direccion y numero"
            fullWidth
            autoComplete="shipping address-line"
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
              Puntos de retiro
             </Typography>
             <Typography variant="h5" gutterBottom>
             Elegí el punto de retiro gratuito que te convenga y te contactaremos para coordinar la entrega.
             </Typography>
             </Grid>

        <Grid container spacing={2} className='Retiros'>
             <Grid item xs={12} sm={6} className='puntoRetiro'>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
               label="Floresta (CABA)"
             />
        </Grid>
        <Grid item xs={12} sm={6}>
             <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Polo de Palermo (CABA)"
           />
        </Grid>
        <Grid item xs={12} sm={6}>
             <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Boulogne"
           />
        </Grid>
        <Grid item xs={12} sm={6}>
             <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Benavidez"
           />
        </Grid>
        
   </Grid>
 </Grid>
     
    </React.Fragment>
  );
}
