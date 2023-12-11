import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  CardMedia,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const CartItem = ({ item, handleRemove, handleQuantityChange }) => {
  const { nombre, precio, cantidad, images } = item;
  const total = cantidad * precio;

  return (
    <TableRow>
      <TableCell>
        <CardMedia
          component="img"
          alt={nombre}
          image={images && images.length > 0 ? images[0].imagen : ""}
          style={{ width: 50, height: 50 }}
        />
      </TableCell>
      <TableCell>{nombre}</TableCell>
      <TableCell>${precio}</TableCell>
      <TableCell>
        <Box display="flex" alignItems="center">
          <IconButton
            onClick={() =>
              handleQuantityChange(item.id, cantidad - 1)
            } /*  disabled={cantidad <= 1} */
          >
            -
          </IconButton>
          <Typography variant="body1">{cantidad}</Typography>
          <IconButton
            onClick={() =>
              handleQuantityChange(item.id, cantidad + 1)
            } /* disabled={cantidad >= item.stock} */
          >
            +
          </IconButton>
        </Box>
      </TableCell>
      <TableCell>${total}</TableCell>
      <TableCell>
        <IconButton onClick={() => handleRemove(item.id)} color="secondary">
          <FontAwesomeIcon icon={faTrash} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    cantidad: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        imagen: PropTypes.string.isRequired,
        productos_id: PropTypes.number.isRequired,
      })
    ),
  }),
  handleRemove: PropTypes.func.isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
};

export default CartItem;
