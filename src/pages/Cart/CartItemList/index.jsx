import { Table, TableBody } from '@mui/material';
import PropTypes from 'prop-types';
import CartItem from '../CartItem';

const CartItemsList = ({ cartItems, handleRemove, handleQuantityChange }) => {
  return (
    <Table>
      <TableBody>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            handleRemove={handleRemove}
            handleQuantityChange={handleQuantityChange}
          />
        ))}
      </TableBody>
    </Table>
  );
};

CartItemsList.propTypes = {
    cartItems: PropTypes.array,
    handleRemove: PropTypes.func.isRequired,
    handleQuantityChange: PropTypes.func.isRequired,
  };
  

export default CartItemsList;
