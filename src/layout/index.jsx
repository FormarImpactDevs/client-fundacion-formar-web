import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./mainLayout.scss";
import PropTypes from "prop-types";
//import CartBadge from "../components/CartBadge";
import CheckoutModal from "../components/CheckoutModal/CheckoutModal";
import { useOrder } from "../context/orderContext";
import { WhatsAppFloating } from "../components/WhatsAppFloating";

export const MainLayout = ({ children }) => {
  const { modalIsOpen, hideModal } = useOrder();
  return (
    <div className="main">
      <Header />
      <WhatsAppFloating />
      {/* Se oculta el badge del carrito por el momento */}
      {/* <CartBadge /> */}
      <section className="mainContainer">{children}</section>
      <CheckoutModal open={modalIsOpen} hideModal={hideModal}/>

      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
