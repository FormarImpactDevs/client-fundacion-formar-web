import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useOrder } from '../../context/orderContext';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Review() {
  const { ordenState } = useOrder();
  const {
    tipo_de_entrega,
    client_data /* {
      firstName: "",
      mail: "",
      lastName: "",
      phone: "",
      dni: "",
      domicilio: {
        calle: "",
        numero: "",
        piso: "",
        depto: "",
        localidad: "",
        provincia: "",
      }, */
    ,
    punto_retiro_id,
    detalle_pedido,
  } = ordenState;

  const [total, setTotal] = useState();


  useEffect(() => {
    const sumaTotaldeProductos = detalle_pedido.reduce((acum, item) => Number(acum) + (Number(item.unit_price) * Number(item.quantity)), 0);
    setTotal(sumaTotaldeProductos)
  },[detalle_pedido])

  return (
    <>
      <Typography variant="h2" gutterBottom>
       Resumen del pedido
      </Typography>
      <List disablePadding>
        {detalle_pedido.map((product) => (
          <ListItem key={product.nombre} sx={{ py: 0.5, px: 0 }}>
            <ListItemText primary={`${product.nombre} ${product.quantity}`} secondary={product.descripcion} />
            <Typography variant="body2">{product.unit_price * product.quantity}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            ${total}
          </Typography>
        </ListItem>
      </List>
      <Grid container width="100%">
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Forma de entrega - {tipo_de_entrega === "point" ? "Punto de retiro" : "Envio"}
          </Typography>
          <Typography gutterBottom>{`${client_data.firstName} ${client_data.lastName}`}</Typography>
          <Typography gutterBottom>{`${client_data.dni}`}</Typography>
          <Typography gutterBottom>{`${client_data.mail}`}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
