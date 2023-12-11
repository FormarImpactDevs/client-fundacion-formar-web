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
  Box,
  styled,
} from "@mui/material";
import { useEffect } from "react";
import { useOrder } from "../../../context/orderContext";
import PointsList from "./components/PointsList";
import DeliveryForm from "./components/DeliveryForm";

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

  const handleRadioChange = (event) => {
    setRadio(event.target.value);
    dispatch({
      type: "CARGAR_TIPO_ENTREGA",
      payload: event.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validación de campos obligatorios
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === "") {
        newErrors[key] = `${key} es requerido`;
      }
    });

    // Validación para puntoDeRetiro
    if (radioValue === "puntoDeRetiro" && ordenState.punto_retiro_id === null) {
      newErrors.puntoDeRetiro = "Selecciona un punto de retiro";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const selectedMethod = (radioValue) => {
    if (!radioValue) {
      return <Typography variant="h4"> Selecciona </Typography>;
    }

    if (radioValue === "puntoDeRetiro") return <PointsList />;
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
        <Grid>
          <FormControl>
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
                sx={{ ml: 3 }}
              >
                <Grid item xs={12} sm={5}>
                  <FormControlLabel
                    value="puntoDeRetiro"
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
        <Grid container padding={5}>{selectedMethod(radioValue)}</Grid>
      </Grid>
    </React.Fragment>
  );
}
