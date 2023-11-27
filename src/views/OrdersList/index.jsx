import Title from "../../components/Title";
import { MainLayout } from "../../layout";
import { DataGrid } from "@mui/x-data-grid";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getOrdersService } from "../../services/orders.service";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "sweetalert2/src/sweetalert2.scss";
import styles from "./ordersList.module.scss";
import { ButtonGoToBack } from "../../components/ButtonGoToBack";

export const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const OrdersData = await getOrdersService();
      setOrders(OrdersData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const columns = [
    { field: "numero_orden", headerName: "Número de orden", width: 130 },
    { field: "tipo_de_entrega", headerName: "Tipo de entrega", width: 130 },
    { field: "estado_del_pedido", headerName: "Estado del pedido", width: 130 },
    { field: "estado_del_pago", headerName: "Estado del pago", width: 130 },
    { field: "link", headerName: "Link", width: 130 },
    { field: "client_data", headerName: "Datos del cliente", width: 130 },
    { field: "punto_retiro_id", headerName: "Punto de retiro", width: 130 },
    { field: "detalle_pedido", headerName: "Detalle del pedido", width: 130 },
    { field: "monto_total", headerName: "Monto total", width: 130 },
    {
      headerName: "Editar",
      field: "actions",
      type: "actions",
      width: 130,
      getActions: (params) => [
        <GridActionsCellItem
          icon={
            <Link to={`/admin/orders/edit/${params.id}`}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Link>
          }
          label="Editar"
          key={params.numero_orden}
        />,
      ],
    },
  ];

  return (
    <>
      <MainLayout>
        <ButtonGoToBack />
        <section className={styles.mainContainerList}>
          <Title text="Lista de pedidos" />
          <div className={styles.containerList}>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={orders}
                columns={columns}
                getRowId={(row) => row.numero_orden}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
              />
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};
