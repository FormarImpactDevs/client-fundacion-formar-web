import React, { useState } from 'react';
import {
CssBaseline,
AppBar,
Box,
Container,
Paper,
Stepper,
Step,
StepLabel,
Button,
Typography,
Radio,
RadioGroup,
FormControl  }
from '@mui/material';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';



const steps = ['Direccion de envio', 'Detalles de pago', 'Orden'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Gracias por su pedido.
              </Typography>
              <Typography variant="subtitle1">
               Su número de pedido es #2001539. Hemos enviado su confirmación de pedido por correo electrónico
               y le enviaremos una actualización cuando su pedido haya sido
                enviado.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Atras
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Siguiente'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
    
      </Container>
    </React.Fragment>
  );
}
