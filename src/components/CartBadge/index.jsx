import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useCart } from "../../context/cartContext";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 25,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CartBadge() {
  const { carritoState } = useCart();
  const { productos } = carritoState;

  return (
    <Box className={styles.cartButton}>
      <Link to="/mi-compra">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={productos.length} color="secondary">
            <FontAwesomeIcon icon={faShoppingCart} />
          </StyledBadge>
        </IconButton>
      </Link>
    </Box>
  );
}
