
import { Button, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';


const CartSummary = ({ subtotal, total, handleCheckout }) => {
  return (
    <Grid container flexDirection={"column"} justifyContent="space-evenly" height="100%">
      <Typography variant="h3">Resumen del Carrito</Typography>
      <Typography variant="h4">Subtotal: ${subtotal}</Typography>
      <Typography variant="h4">Total: ${total}</Typography>
      <Button variant="contained" color="primary" onClick={handleCheckout}>
        Finalizar compra
      </Button>
    </Grid>
  );
};

CartSummary.propTypes = {
    handleCheckout: PropTypes.func.isRequired,
    subtotal: PropTypes.any, 
    total: PropTypes.any, 
  };
  

export default CartSummary;
