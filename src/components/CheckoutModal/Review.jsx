/* import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useOrder } from "../../context/orderContext";
import { useState } from "react";
import { useEffect } from "react";

export default function Review() {
  const { ordenState } = useOrder();
  const {
    tipo_de_entrega,
    client_data ,
    punto_retiro_id,
    detalle_pedido,
  } = ordenState;

  const [total, setTotal] = useState();

  useEffect(() => {
    try {
      const sumaTotaldeProductos = detalle_pedido.reduce(
        (acum, item) =>
          Number(acum) + Number(item.precio) * Number(item.quantity),
        0
      );
      setTotal(sumaTotaldeProductos);
    } catch (error) {
      console.error("Error al obtener el total", error);
    }
  }, [detalle_pedido]);

  return (
    <>
      <Typography variant="h2" gutterBottom>
        Resumen del pedido
      </Typography>
      <List disablePadding style={{maxHeight:"50vh", overflowX: "scroll"}}>
        {detalle_pedido.map((product) => (
          <ListItem key={product.nombre} sx={{ py: 0.5, px: 0 }}>
            <ListItemText
              primary={`${product.nombre} ${product.quantity}`}
              secondary={product.descripcion}
            />
            <Typography variant="body2">
              {product.precio * product.quantity}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 0.5, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            ${total}
          </Typography>
        </ListItem>
      </List>
      <Grid container width="100%">
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Forma de entrega -{" "}
            {tipo_de_entrega === "point" ? "Punto de retiro" : "Envio"}
          </Typography>
          <Typography
            gutterBottom
          >{`${client_data.firstName} ${client_data.lastName}`}</Typography>
          <Typography gutterBottom>{`${client_data.phone}`}</Typography>
          <Typography gutterBottom>{`${client_data.mail}`}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
 */
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useOrder } from "../../context/orderContext";
import { useState, useEffect } from "react";

export default function Review() {
  const { ordenState } = useOrder();
  const { tipo_de_entrega, client_data, detalle_pedido } =
    ordenState;

  const [total, setTotal] = useState(0);

  useEffect(() => {
    try {
      const sumaTotal = detalle_pedido.reduce(
        (acum, item) => acum + Number(item.precio) * Number(item.quantity),
        0
      );
      setTotal(sumaTotal);
    } catch (error) {
      console.error("Error al calcular el total:", error);
    }
  }, [detalle_pedido]);

  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Resumen del pedido
      </Typography>
      <List disablePadding sx={{ maxHeight: "35vh", overflowY: "auto" }}>
        {detalle_pedido.map((product) => (
          <ListItem
            key={product.nombre}
            sx={{
              py: 1,
              px: 2,
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <ListItemText
              primary={`${product.nombre} (x${product.quantity})`}
              secondary={product.descripcion}
            />
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              ${Number(product.precio * product.quantity).toFixed(2)}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 2 }}>
          <ListItemText primary="Total" />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            ${total.toFixed(2)}
          </Typography>
        </ListItem>
      </List>

      <Grid container sx={{ mt: 4 }}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "medium" }}>
            Forma de entrega:{" "}
            {tipo_de_entrega === "point" ? "Punto de retiro" : "Envío"}
          </Typography>
          
          <Typography gutterBottom>
            <strong>Nombre:</strong> {`${client_data.firstName} ${client_data.lastName}`}
          </Typography>
          <Typography gutterBottom>
            <strong>Teléfono:</strong> {client_data.phone}
          </Typography>
          <Typography gutterBottom>
            <strong>Email:</strong> {client_data.mail}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
