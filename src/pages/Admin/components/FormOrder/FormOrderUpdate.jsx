import { useParams } from "react-router-dom";
import {
  Button,
  Box,
  CssBaseline,
  Container,
  Grid,
  TextField,
  styled,
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
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import {
  getOrderServiceByOrderNumber,
  updateOrderService,
} from "../../../../services/orders.service";
import { useNavigate } from "react-router-dom";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#75aadb",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#75aadb",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#75aadb",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#75aadb",
    },
  },
});

export const FormOrderUpdate = () => {
  const { orderNumber } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  const [domicilioCliente, setDomicilioCliente] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getOrderByOrderNumber = async (orderNumber) => {
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrderByOrderNumber(orderNumber);
    if (order != undefined) {
      setIsLoading(false);
    }
  }, [orderNumber]);

  const {
    numero_orden,
    tipo_de_entrega,
    estado_del_pedido,
    estado_del_pago,
    link,
    cliente,
    punto_retiro_id,
    detalle,
    monto_total,
  } = order;

  const initialValues = {
    numero_orden: numero_orden,
    tipo_de_entrega: tipo_de_entrega,
    estado_del_pedido: estado_del_pedido,
    estado_del_pago: estado_del_pago,
    link: link,
    client_data: cliente,
    punto_retiro_id: punto_retiro_id,
    detalle_pedido: detalle,
    monto_total: monto_total,
  };
  const getValidationSchema = () =>
    Yup.lazy(() =>
      Yup.object({
        estado_del_pedido: Yup.string().required("Este campo es obligatorio."),
      })
    );

  const onSubmit = async (values) => {
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
      if (error) {
        Swal.fire({
          icon: "error",
          title: "¡Hubo un error al actualizar el pedido!",
          text: error.message,
        });
      }
    }
  };

  const { handleSubmit, values, setFieldValue, errors } = useFormik({
    validateOnBlur: false,

    validateOnChange: false,

    initialValues: initialValues,

    validationSchema: getValidationSchema(),

    onSubmit,
  });

  const estados = [
    "Pendiente",
    "Entregado",
    "Despachado",
    "Cancelado",
    "Rechazado",
  ];
  console.log(detalle);
  return (
    <>
      {!isLoading ? (
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
              validationSchema={getValidationSchema()}
              onSubmit={onSubmit}
            >
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
                        <p>{`${numero_orden}`}</p>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <div className="fieldContainer">
                        <h5>Tipo de entrega</h5>
                        <p>{`${
                          tipo_de_entrega == "point"
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
                          cliente?.firstName + "  " + cliente?.lastName
                        }`}</p>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <div className="fieldContainer">
                        <h5>Mail</h5>
                        <p>{`${cliente?.mail}`}</p>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <div className="fieldContainer">
                        <h5>Teléfono</h5>
                        <p>{`${cliente?.phone}`}</p>
                      </div>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <div className="fieldContainer">
                        <h5>DNI</h5>
                        <p>{`${cliente?.dni}`}</p>
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

                    {detalle?.map((item) => (
                      <section className="detalleOrder" key={item.id}>
                        <Grid item xs={6} sm={6}>
                          <div className="fieldContainer">
                            <h5>Producto</h5>
                            <p>{`${item.nombre}`}</p>
                          </div>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                          <div className="fieldContainer">
                            <h5>Precio con descuento</h5>
                            <p>{`${
                              item.precio - item.precio * (item.descuento / 100)
                            }`}</p>
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
                          value={estado_del_pedido}
                          defaultValue={estado_del_pedido}
                          label="Estado del pedido"
                          fullWidth
                          error={errors?.estado_del_pedido && true}
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
                        <p>{`${estado_del_pago}`}</p>
                      </div>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                      <div className="fieldContainer">
                        <h5>Punto de retiro</h5>
                        <p>{`${punto_retiro_id}`}</p>
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <div className="fieldContainer">
                        <h5>Monto total</h5>
                        <p>${`${monto_total}`}</p>
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
            </Formik>
          </Box>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};
