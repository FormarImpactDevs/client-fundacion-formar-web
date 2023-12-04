
import { Grid, Typography } from '@mui/material';
import { Button } from '../../components/Button';
import CartItemsList from './CartItemList';
import CartSummary from './CartSummary';
import { useCart } from '../../context/cartContext';

const CartPage = () => {
  const { carritoState } = useCart()
  const { productos } = carritoState;

  const handleRemove = (itemId) => {
    // Lógica para eliminar un elemento del carrito
    // dispatch(deleteCartItem(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    // Lógica para cambiar la cantidad de un elemento del carrito
    // dispatch(updateCartItemQuantity(itemId, newQuantity));
  };

  const handleCheckout = () => {
    // Lógica para finalizar la compra
    // Redireccionar a la página de checkout o realizar acciones necesarias
    // history.push('/checkout');
  };

  const subtotal = productos.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const total = subtotal; // Puedes aplicar lógica adicional para calcular descuentos u otros costos aquí

  return (
    <Grid container>
      <Typography variant="h4" gutterBottom>
        Carrito de Compras
      </Typography>
      {productos.length > 0 ? (
        <>
          <CartItemsList
            cartItems={productos}
            handleRemove={handleRemove}
            handleQuantityChange={handleQuantityChange}
          />
          <CartSummary subtotal={subtotal} total={total} handleCheckout={handleCheckout} />
        </>
      ) : (
        <>
          <Typography variant="subtitle1">No hay productos en el carrito</Typography>
          <Button variant="contained" color="primary">
            Ir a Productos
          </Button>
        </>
      )}
    </Grid>
  );
};

export default CartPage;
