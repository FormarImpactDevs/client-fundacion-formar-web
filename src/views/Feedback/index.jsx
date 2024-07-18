import { useState, useEffect } from "react";
import { MainLayout } from "../../layout";
import { ButtonGoToBack } from "../../components/ButtonGoToBack";
import Alert from "@mui/material/Alert";
import { useParams } from "react-router-dom";
import vamosDeCompras from "../../assets/ShoppingCart/vamosDeCompras.png";
import pagoPendiente from "../../assets/ShoppingCart/pagoPendiente.png";
import pagoRechazado from "../../assets/ShoppingCart/pagoRechazado.png";
import styles from "./feedback.module.scss";

export const Feedback = () => {
  const { status } = useParams();
  const [feedback, setFeedback] = useState({
    textStatus: '',
    imgStatus: '',
    condition: ''
  });

  useEffect(() => {
    let textStatus = '';
    let imgStatus = '';
    let condition = '';

    switch (status) {
      case 'success':
        textStatus = 'El pago ha sido realizado correctamente';
        imgStatus = vamosDeCompras;
        condition = 'success';
        break;
      case 'pending':
        textStatus = 'El pago se encuentra pendiente';
        imgStatus = pagoPendiente;
        condition = 'warning';
        break;
      case 'failure':
        textStatus = 'Ocurrió un error al realizar el pago';
        imgStatus = pagoRechazado;
        condition = 'error';
        break;
      default:
        textStatus = 'Estado desconocido';
        imgStatus = '';
        condition = 'info';
        break;
    }

    setFeedback({ textStatus, imgStatus, condition });
  }, [status]);

  return (
    <MainLayout>
      <section className={styles.feedbackContainer}>
        <div style={{ display: "flex", position: "relative" }}>
          <Alert severity={feedback.condition}>
            {feedback.textStatus}
          </Alert>
        </div>
        <figure className={styles.iconStatus}>
          <img
            src={feedback.imgStatus}
            alt="Estado de pago"
            className={styles.iconStatus}
          />
        </figure>
        <div style={{ display: "flex", position: "relative" }}>
          <a href="/">
            <ButtonGoToBack />
          </a>
        </div>
      </section>
    </MainLayout>
  );
};
