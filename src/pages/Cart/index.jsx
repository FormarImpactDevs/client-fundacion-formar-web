import { Button, Grid, Typography } from "@mui/material";
import CartItemsList from "./CartItemList";
import CartSummary from "./CartSummary";
import { useCart } from "../../context/cartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { carritoState, dispatch } = useCart();
  const { productos } = carritoState;

  const handleRemove = (itemId) => {
    // Lógica para eliminar un elemento del carrito
    dispatch({ type: "QUITAR_PRODUCTO", payload: itemId });
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    // Lógica para cambiar la cantidad de un elemento del carrito
    dispatch({ type: "CAMBIAR_CANTIDAD", payload: { itemId, newQuantity } });
  };

  const clearCart = () => {
    dispatch({ type: "VACIAR_CARRITO" });
  };

  const handleCheckout = () => {
    // Lógica para finalizar la compra
    // Redireccionar a la página de checkout o realizar acciones necesarias
    // history.push('/checkout');
  };

  const subtotal = productos.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );
  const total = subtotal; // Puedes aplicar lógica adicional para calcular descuentos u otros costos aquí

  return (
    <Grid container flexDirection={"column"} padding="10rem">
      <Grid item>
        <Typography variant="h2" gutterBottom>
          Carrito de Compras
        </Typography>
      </Grid>
      {productos.length > 0 ? (
        <Grid container justifyContent="space-between">
          <Grid item paddingTop={2}>
            <CartItemsList
              cartItems={productos}
              handleRemove={handleRemove}
              handleQuantityChange={handleQuantityChange}
            />
          </Grid>
          <Grid item>
            <CartSummary
              subtotal={subtotal}
              total={total}
              handleCheckout={handleCheckout}
            />
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid item padding={10}>
            <Typography variant="subtitle1" textAlign="center">
              No hay productos en el carrito
            </Typography>
          </Grid>

          <Grid item>
            <Button variant="contained" color="primary">
              <Link to="/products">Ir a Productos</Link>
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default CartPage;
