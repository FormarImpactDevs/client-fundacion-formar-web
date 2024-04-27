import { Button, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

const CartSummary = ({ subtotal, total, handleCheckout, quatityProducts }) => {
  return (
    <Grid
      container
      flexDirection={"column"}
      justifyContent="space-evenly"
      height="100%"
      width="100%"
    >
      <h3 className="subtitle mt-5">Resumen</h3>
      <hr />

      <Grid
        item
        my={2}
        container
        justifyContent="space-between"
        alignItems="center"
        color="#58595b"
      >
        <Typography variant="h4">Cantidad de productos:</Typography>
        <Typography variant="h4">
          <strong>{quatityProducts}</strong>
        </Typography>
      </Grid>
      <Grid
        item
        my={2}
        container
        justifyContent="space-between"
        alignItems="center"
        color="#58595b"
      >
        <Typography variant="h4">Subtotal:</Typography>
        <Typography variant="h4">
          <strong>${subtotal}</strong>
        </Typography>
      </Grid>
      <Grid
        item
        my={2}
        container
        justifyContent="space-between"
        alignItems="center"
        color="#58595b"
      >
        <Typography variant="h4">Total:</Typography>
        <Typography variant="h4">
          <strong>${total}</strong>
        </Typography>
      </Grid>

      <Button
        variant="contained"
        justifyContent="flex-end"
        onClick={handleCheckout}
        sx={{
          color: "secondary.light",
        }}
      >
        Finalizar compra
      </Button>
    </Grid>
  );
};

CartSummary.propTypes = {
  handleCheckout: PropTypes.func.isRequired,
  subtotal: PropTypes.any,
  total: PropTypes.any,
  quatityProducts: PropTypes.any,
};

export default CartSummary;
