import { Button, Grid } from "@mui/material";
import CartItemsList from "./CartItemList";
import CartSummary from "./CartSummary";
import { useCart } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { MainLayout } from "../../layout";
import { useOrder } from "../../context/orderContext";
import Title from "../../components/Title";
import vamosDeCompras from "../../assets/ShoppingCart/vamosDeCompras.png";
import styles from "./cart.module.scss";
const CartPage = () => {
  const { carritoState, dispatch } = useCart();
  const { productos } = carritoState;
  const { displayModal } = useOrder();

  const handleRemove = (itemId) => {
    // Lógica para eliminar un elemento del carrito
    dispatch({ type: "QUITAR_PRODUCTO", payload: itemId });
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    // Lógica para cambiar la cantidad de un elemento del carrito
    if (newQuantity === 0) {
      dispatch({ type: "QUITAR_PRODUCTO", payload: itemId });
      return;
    }
    dispatch({ type: "CAMBIAR_CANTIDAD", payload: { itemId, newQuantity } });
  };

  const clearCart = () => {
    dispatch({ type: "VACIAR_CARRITO" });
  };

  const calcularCantidadTotal = () => {
    return productos.reduce((acc, item) => acc + item.quantity, 0);
  };

  const subtotal = productos.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );
  const total = subtotal; // Puedes aplicar lógica adicional para calcular descuentos u otros costos aquí

  return (
    <MainLayout>
      <Grid item mt={12}>
        <Title text="Mi carrito" />
      </Grid>

      <Grid container flexDirection={"column"} padding="3rem">
        {productos.length > 0 ? (
          <Grid container justifyContent="space-evenly">
            <Grid item paddingTop={2} className={styles.containerItemsList}>
              <CartItemsList
                cartItems={productos}
                handleRemove={handleRemove}
                handleQuantityChange={handleQuantityChange}
              />
            </Grid>
            <div className={styles.lineHeigth}></div>
            <Grid item className={styles.containerSummary}>
              <CartSummary
                quatityProducts={calcularCantidadTotal()} /* Aquí iría el recuento de los productos */
                subtotal={subtotal}
                total={total}
                handleCheckout={displayModal}
              />
            </Grid>
          </Grid>
        ) : (
          <>
            <section className={styles.emptyCart}>
              <h3 className="subtitle">
                Aún no hay productos en tu carrito ¡Vayamos de compras!
              </h3>

              <figure className={styles.iconEmptycart}>
                <img
                  src={vamosDeCompras}
                  alt="Ir a comprar"
                  className={styles.iconEmptycart}
                />
              </figure>

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
                <Link to="/products">Ir a comprar</Link>
              </Button>
            </section>
          </>
        )}
      </Grid>
    </MainLayout>
  );
};

export default CartPage;
