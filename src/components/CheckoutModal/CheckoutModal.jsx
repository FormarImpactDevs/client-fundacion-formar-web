import { Box, Modal } from "@mui/material";
import PropTypes from "prop-types";
import Checkout from "./Checkout";
import { useOrder } from "../../context/orderContext";

export default function CheckoutModal({ open }) {
  const { hideModal } = useOrder();
  return (
    <Modal
      open={open}
      onClose={hideModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Checkout />
      </Box>
    </Modal>
  );
}

CheckoutModal.propTypes = {
  open: PropTypes.bool,
  hideModal: PropTypes.func,
};
