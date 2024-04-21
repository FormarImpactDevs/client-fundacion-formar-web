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
  const { nombre, precio, quantity, images } = item;
  const total = quantity * precio;

  return (
    <>
      {/* Para dispositivos móviles y tablets */}
      <TableRow
        className="paragraph2"
        sx={{
          color: "#58595b",
          textAlign: "center",
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
        }}
      >
        <TableCell>
          <CardMedia
            component="img"
            alt={nombre}
            image={images && images.length > 0 ? images[0].imagen : ""}
            style={{ width: 60, height: 60 }}
          />
        </TableCell>
        <TableCell>
          <Typography variant="body1">
            <strong>{nombre}</strong>
          </Typography>
          <Typography variant="body2">${total}</Typography>
        </TableCell>
        <TableCell>
          <Box display="flex" alignItems="center">
            <IconButton
              onClick={() => handleQuantityChange(item.id, quantity - 1)}
            >
              -
            </IconButton>
            <Typography variant="body1">{quantity}</Typography>
            <IconButton
              onClick={() => handleQuantityChange(item.id, quantity + 1)}
            >
              +
            </IconButton>
          </Box>
        </TableCell>
        <TableCell>
          <IconButton onClick={() => handleRemove(item.id)} color="secondary">
            <FontAwesomeIcon icon={faTrash} />
          </IconButton>
        </TableCell>
      </TableRow>

      {/* Para dispositivos de escritorio */}
      <TableRow
        className="paragraph2"
        sx={{
          color: "#58595b",
          textAlign: "center",
          display: { xs: "none", sm: "table-row" },
          justifyContent: "space-around",
          alignItems: "center",
          borderBottom: "1px solid #e0e0e3",
        }}
      >
        <TableCell>
          <CardMedia
            component="img"
            alt={nombre}
            image={images && images.length > 0 ? images[0].imagen : ""}
            style={{ width: 75, height: 75 }}
          />
        </TableCell>
        <TableCell>{nombre}</TableCell>
        <TableCell>${precio}</TableCell>
        <TableCell>
          <Box display="flex" alignItems="center">
            <IconButton
              onClick={() => handleQuantityChange(item.id, quantity - 1)}
            >
              -
            </IconButton>
            <Typography variant="body1">{quantity}</Typography>
            <IconButton
              onClick={() => handleQuantityChange(item.id, quantity + 1)}
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
    </>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
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
