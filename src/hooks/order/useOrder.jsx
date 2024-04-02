import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrderServiceByOrderNumber } from "../../services/orders.service";

export const useOrder = () => {
  const { orderNumber } = useParams();
  const [order, setOrder] = useState([]);
  const [domicilioCliente, setDomicilioCliente] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getOrderByOrderNumber = async () => {
      try {
        const OrderData = await getOrderServiceByOrderNumber(orderNumber);

        const {
          numero_orden,
          tipo_de_entrega,
          estado_del_pedido,
          estado_del_pago,
          link,
          client_data,
          punto_retiro_id,
          detalle_pedido,
          monto_total,
        } = OrderData;

        let cliente = JSON.parse(client_data);
        if (cliente && cliente.domicilio && cliente.domicilio.calle !== "") {
          setDomicilioCliente(
            cliente?.domicilio?.calle +
              cliente.domicilio.numero +
              "," +
              cliente.domicilio.localidad +
              "," +
              cliente.domicilio.provincia
          );
        }
        let detalle = JSON.parse(detalle_pedido);

        setOrder({
          numero_orden,
          tipo_de_entrega,
          estado_del_pedido,
          estado_del_pago,
          link,
          cliente,
          punto_retiro_id,
          detalle,
          monto_total,
        });
        setIsLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    };

    getOrderByOrderNumber();
  }, [orderNumber]);

  return { order, domicilioCliente, isLoading };
};
