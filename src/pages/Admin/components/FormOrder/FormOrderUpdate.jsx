import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  CssBaseline,
  Container,
  Grid,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";

import "../../../../components/Form/formDates.scss";
import "./FormOrder.scss";
/* Componentes */
import { Loading } from "../../../../components/Loading";
import Swal from "sweetalert2";
/* Formik y Yup */
import { Formik } from "formik";
import * as Yup from "yup";
import { updateOrderService } from "../../../../services/orders.service";
import { useOrder } from "../../../../hooks/order/useOrder";
import { usePointById } from "../../../../hooks/points/usePoint";

export const FormOrderUpdate = () => {
  const { orderNumber } = useParams();
  const navigate = useNavigate();
  const { order, domicilioCliente, isLoading } = useOrder();
  const { point, loading: pointLoading } = usePointById(order?.punto_retiro_id);

  const initialValues = {
    estado_del_pedido: order?.estado_del_pedido || "",
  };

  const validationSchema = Yup.object({
    estado_del_pedido: Yup.string().required("Este campo es obligatorio."),
  });
  const handleSubmit = async (values) => {
    try {
      const data = { estado_del_pedido: values.estado_del_pedido };
      const response = await updateOrderService(orderNumber, data);
      Swal.fire({
        icon: "success",
        title: "¡Pedido actualizado!",
        text: response,
      }).then(() => {
        navigate("/admin/orders");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Hubo un error al actualizar el pedido!",
        text: error.message,
      });
    }
  };

  if (isLoading || pointLoading || point === null) {
    return <Loading />;
  }

  const estados = [
    "Pendiente",
    "Entregado",
    "Despachado",
    "Cancelado",
    "Rechazado",
  ];
  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            marginBottom: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "secondary.main",
            fontSize: "14px",
          }}
          className="containerForm"
        >
          <h1 className="subtitle">EDITAR PEDIDO</h1>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, values, handleSubmit, setFieldValue }) => (
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
                maxWidth="xs"
                action=""
                method="PUT"
                encType="multipart/form-data"
              >
                <div className="mb-2">
                  <Grid container spacing={0}>
                    <Grid item xs={6} sm={6}>
                      <div className="fieldContainer">
                        <h5>Número de orden</h5>
                        <p>{`${order.numero_orden}`}</p>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <div className="fieldContainer">
                        <h5>Tipo de entrega</h5>
                        <p>{`${
                          order.tipo_de_entrega == "point"
                            ? "Punto de retiro"
                            : "Delivery"
                        }`}</p>
                      </div>
                    </Grid>
                    <div className="col-12 my-4 text-center">
                      <h1 className="subtitle">Datos del cliente</h1>
                    </div>
                    <Grid item xs={6} sm={6}>
                      <div className="fieldContainer">
                        <h5>Nombre y Apellido</h5>
                        <p>{`${
                          order.cliente?.firstName +
                          "  " +
                          order.cliente?.lastName
                        }`}</p>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <div className="fieldContainer">
                        <h5>Mail</h5>
                        <p>{`${order.cliente?.mail}`}</p>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <div className="fieldContainer">
                        <h5>Teléfono</h5>
                        <p>{`${order.cliente?.phone}`}</p>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <div className="fieldContainer">
                        <h5>DNI</h5>
                        <p>{`${order.cliente?.dni}`}</p>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <div className="fieldContainer">
                        <h5>Domicilio</h5>
                        <p>{`${domicilioCliente}`}</p>
                      </div>
                    </Grid>
                    <div className="col-12 my-4 text-center">
                      <h1 className="subtitle">Detalle del pedido</h1>
                    </div>

                    {order.detalle?.map((item) => (
                      <section className="detalleOrder" key={item.id}>
                        <Grid item xs={6} sm={6}>
                          <div className="fieldContainer">
                            <h5>Producto</h5>
                            <p>{`${item.nombre}`}</p>
                          </div>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <div className="fieldContainer">
                            <h5>Precio</h5>
                            <p>{`${item.precio}`}</p>
                          </div>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <div className="fieldContainer">
                            <h5>Cantidad</h5>
                            <p>{`${item.quantity}`}</p>
                          </div>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <div className="fieldContainer">
                            <h5>Emprendimiento</h5>
                            <p>{`${item.emprendimientos.nombre}`}</p>
                          </div>
                        </Grid>
                      </section>
                    ))}

                    <Grid item xs={12} sm={12}>
                      <div className="stateOrderForm">
                        <InputLabel id="estado_del_pedido">
                          Estado del pedido
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="estado_del_pedido"
                          name="estado_del_pedido"
                          defaultValue={values.estado_del_pedido}
                          label="Estado del pedido"
                          fullWidth
                          error={Boolean(errors.estado_del_pedido)}
                          helperText={
                            errors?.estado_del_pedido
                              ? errors.estado_del_pedido
                              : ""
                          }
                          onChange={(e) =>
                            setFieldValue("estado_del_pedido", e.target.value)
                          }
                        >
                          {estados.map((estado, index) => (
                            <MenuItem value={estado} key={index}>
                              {estado}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <div className="fieldContainer">
                        <h5>Estado del pago</h5>
                        <p>{`${order.estado_del_pago}`}</p>
                      </div>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                      <div className="fieldContainer">
                        <h5>Punto de retiro</h5>
                        <p>{`${point.nombre}`}</p>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <div className="fieldContainer">
                        <h5>Monto total</h5>
                        <p>${`${order.monto_total}`}</p>
                      </div>
                    </Grid>
                  </Grid>
                </div>

                <Grid container justifyContent="flex-end" className="w-95">
                  <Grid item>
                    <Button
                      type="submit"
                      variant="contained"
                      size="medium"
                      justifyContent="flex-end"
                      className="button"
                      sx={{
                        color: "secondary.light",
                        mt: 3,
                        mb: 2,
                      }}
                    >
                      Guardar
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Formik>
        </Box>
      </Container>
    </>
  );
};
