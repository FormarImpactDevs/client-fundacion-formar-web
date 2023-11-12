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
/* import InputLabel from '@mui/material/InputLabel'; */
import InputAdornment from "@mui/material/InputAdornment";

import "../../../../components/Form/formDates.scss";

import Swal from "sweetalert2";

/* Formik y Yup */
import { Formik, useFormik, Field /* , Form  */ } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import {
  getOrderServiceByOrderNumber,
  updateOrderService,
} from "../../../../services/orders.service";
import MultipleSelectPlaceholder from "./SelectForm";

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

/* numero_orden,
tipo_de_entrega,
estado_del_pedido,
estado_del_pago,
link,
client_data,
punto_retiro_id,
detalle_pedido,
monto_total*/
export const FormOrderUpdate = () => {
  const { orderNumber } = useParams();
  console.log(useParams());

  const [order, setOrder] = useState([]);

  const getOrderByOrderNumber = async (orderNumber) => {
    try {
      const OrderData = await getOrderServiceByOrderNumber(orderNumber);
      console.log(OrderData);
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

      setOrder({
        numero_orden,
        tipo_de_entrega,
        estado_del_pedido,
        estado_del_pago,
        link,
        client_data,
        punto_retiro_id,
        detalle_pedido,
        monto_total,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrderByOrderNumber(orderNumber);
  }, [orderNumber]);

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
  } = order;


  const initialValues = {
    numero_orden: numero_orden,
    tipo_de_entrega: tipo_de_entrega,
    estado_del_pedido: estado_del_pedido,
    estado_del_pago: estado_del_pago,
    link: link,
    client_data: client_data,
    punto_retiro_id: punto_retiro_id,
    detalle_pedido: detalle_pedido,
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
      const formDataToSend = new FormData();
      formDataToSend.append("numero_orden", numero_orden);
      formDataToSend.append("tipo_de_entrega", tipo_de_entrega);
      formDataToSend.append("estado_del_pedido", values.estado_del_pedido);
      formDataToSend.append("estado_del_pago", estado_del_pago);
      formDataToSend.append("link", link);
      formDataToSend.append("client_data", client_data);
      formDataToSend.append("punto_retiro_id", punto_retiro_id);
      formDataToSend.append("detalle_pedido", detalle_pedido);
      formDataToSend.append("monto_total", monto_total);

      const data = await updateOrderService(orderNumber, formDataToSend);
      Swal.fire({
        icon: "success",
        title: "¡Pedido actualizado!",
        text: data.message,
      });
      setTimeout(() => {
        window.location = "/admin/orders";
      }, 2000);
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

  return (
    <Container component="main" maxWorderNumberth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
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
          {/*  {(formik) => ( */}
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
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <CssTextField
                    fullWidth
                    id="numero_orden"
                    label="Nùmero de orden"
                    name="numero_orden"
                    defaultValue={numero_orden}
                    value={numero_orden}
                    disabled
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CssTextField
                    fullWidth
                    id="tipo_de_entrega"
                    label="Tipo de entrega"
                    name="tipo_de_entrega"
                    defaultValue={tipo_de_entrega}
                    value={tipo_de_entrega}
                    disabled
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <InputLabel id="estado_del_pedido">Estado del pedido</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="estado_del_pedido"
                    name="estado_del_pedido"
                    value={estado_del_pedido}
                    label="Estado del pedido"
                    fullWidth
                    error={errors?.estado_del_pedido && true}
                      helperText={errors?.estado_del_pedido ? errors.estado_del_pedido : ""}
                      onChange={(e) => setFieldValue("estado_del_pedido", e.target.value)}
                    /* onChange={handleChange} */
                  >
                    { estados.map((estado, index) => (
                        <MenuItem value={estado} key={index}>{estado}</MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CssTextField
                    fullWidth
                    id="estado_del_pago"
                    label="Estado del pago"
                    name="estado_del_pago"
                    defaultValue={estado_del_pago}
                    value={estado_del_pago}
                    disabled
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CssTextField
                    fullWidth
                    id="client_data"
                    label="Datos del cliente"
                    name="client_data"
                    defaultValue={client_data}
                    value={client_data}
                    disabled
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CssTextField
                    fullWidth
                    id="punto_retiro_id"
                    label="punto_retiro_id"
                    name="punto_retiro_id"
                    defaultValue={punto_retiro_id}
                    value={punto_retiro_id}
                    disabled
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CssTextField
                    fullWidth
                    id="detalle_pedido"
                    label="Detalle del pedido"
                    name="detalle_pedido"
                    defaultValue={detalle_pedido}
                    value={detalle_pedido}
                    disabled
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CssTextField
                    fullWidth
                    id="monto_total"
                    label="Monto total"
                    name="monto_total"
                    defaultValue={monto_total}
                    value={monto_total}
                    disabled
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                  />
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
          {/* )} */}
        </Formik>
      </Box>
    </Container>
  );
};
