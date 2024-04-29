import React from "react";
import { useState } from "react";
import {
  Radio,
  FormControlLabel,
  FormControl,
  RadioGroup,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { useEffect } from "react";
import { useOrder } from "../../../context/orderContext";
import PointsList from "./components/PointsList";
import DeliveryForm from "./components/DeliveryForm";
export let value = false;
export default function UserDataForm() {
  const { ordenState, dispatch } = useOrder();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dni: "",
    mail: "",
  });
  const [radioValue, setRadio] = useState("");
  const [errors, setErrors] = useState({});
  const [isDelivery, setIsDelivery] = useState(false);

  useEffect(() => {
    dispatch({ type: "CARGAR_DATOS_USUARIO", payload: formData });
  }, [formData, dispatch]);

  useEffect(() => {
    if (ordenState.tipo_de_entrega === "delivery") {
      setIsDelivery(true);
    } else {
      setIsDelivery(false);
    }
  }, [ordenState.tipo_de_entrega]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    value = false;
  }, []);

  const handleRadioChange = (event) => {
    setRadio(event.target.value);
    dispatch({
      type: "CARGAR_TIPO_ENTREGA",
      payload: event.target.value,
    });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const validateForm = () => {
    const newErrors = {};
    // Validación de campos obligatorios
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === "") {
        if (key === "firstName") {
          newErrors[key] = "Nombre obligatorio";
        }

        if (key === "lastName") {
          newErrors[key] = "Apellido obligatorio";
        }
        if (key === "dni") {
          newErrors[key] = "Dni obligatorio";
        }
        if (key === "mail") {
          newErrors[key] = "Mail obligatorio";
        }
      }
    });

    // Validación para puntoDeRetiro
    if (radioValue === "point" && ordenState.punto_retiro_id === null) {
      newErrors.puntoDeRetiro = "Selecciona un punto de retiro";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  useEffect(() => {
    if (
      formData.firstName == "" &&
      formData.lastName == "" &&
      formData.dni == "" &&
      formData.mail == ""
    ) {
      return;
    }
    {
      validateForm();
      if (validateForm() === true) {
        value = true;
      } else {
        value = false;
      }
    }
  }, [formData, validateForm]);

  const selectedMethod = (radioValue) => {
    if (!radioValue) {
      return <Typography variant="h4"> Selecciona </Typography>;
    }

    if (radioValue === "point") return <PointsList />;
    if (radioValue === "delivery") return <DeliveryForm />;
  };

  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom className="typography">
        Ingresá tus datos
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nombre"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={formData.firstName}
            onChange={handleInputChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Apellido"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={formData.lastName}
            onChange={handleInputChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dni"
            name="dni"
            label="DNI"
            fullWidth
            autoComplete="numero de dni"
            variant="standard"
            value={formData.dni}
            onChange={handleInputChange}
            error={!!errors.dni}
            helperText={errors.dni}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mail"
            name="mail"
            label="Mail"
            fullWidth
            autoComplete="correo electronico"
            variant="standard"
            value={formData.mail}
            onChange={handleInputChange}
            error={!!errors.mail}
            helperText={errors.mail}
          />
        </Grid>
        <Grid item xs={12} container justifyContent="flex-center" sx={{ m: 0 }}>
          {" "}
          <Typography variant="h3">Como lo recibo o retiro</Typography>
          <Typography variant="h5" gutterBottom>
            Elegí el punto de retiro gratuito que te convenga y te contactaremos
            para coordinar la entrega.
          </Typography>
        </Grid>
        <Grid item width={"100%"}>
          <FormControl fullWidth>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleRadioChange}
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={5}>
                  <FormControlLabel
                    value="point"
                    control={<Radio size="small" />}
                    label="Punto de retiro"
                    labelPlacement="end"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    value="delivery"
                    control={<Radio size="small" />}
                    label="Envio"
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid container padding={5}>
          {selectedMethod(radioValue)}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
