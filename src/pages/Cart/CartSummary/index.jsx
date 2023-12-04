
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Button } from '../../../components/Button';


const CartSummary = ({ subtotal, total, handleCheckout }) => {
  return (
    <Box mt={3}>
      <Typography variant="h6">Resumen del Carrito</Typography>
      <Typography variant="subtitle1">Subtotal: ${subtotal}</Typography>
      <Typography variant="subtitle1">Total: ${total}</Typography>
      <Button variant="contained" color="primary" onClick={handleCheckout}>
        Finalizar compra
      </Button>
    </Box>
  );
};

CartSummary.propTypes = {
    handleCheckout: PropTypes.func.isRequired,
    subtotal: PropTypes.any, 
    total: PropTypes.any, 
  };
  

export default CartSummary;
