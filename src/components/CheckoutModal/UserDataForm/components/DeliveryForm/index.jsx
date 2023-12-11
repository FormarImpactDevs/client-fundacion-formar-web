import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useOrder } from "../../../../../context/orderContext";

export default function DeliveryForm() {
  const { ordenState, dispatch } = useOrder();
  const [formData, setFormData] = useState({
    calle: "",
    numero: "",
    piso: "",
    depto: "",
    localidad: "",
    provincia: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch({ type: "CARGAR_DATOS_DOMICILIO", payload: formData });
  }, [formData, dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="calle"
          name="calle"
          label="Calle"
          fullWidth
          autoComplete="calle"
          variant="standard"
          onChange={handleInputChange}
          error={!!errors.calle}
          helperText={errors.calle}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="numero"
          name="numero"
          label="Número"
          fullWidth
          autoComplete="numero"
          variant="standard"
          onChange={handleInputChange}
          error={!!errors.numero}
          helperText={errors.numero}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="piso"
          name="piso"
          label="Piso"
          fullWidth
          autoComplete="piso"
          variant="standard"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="depto"
          name="depto"
          label="Depto"
          fullWidth
          autoComplete="depto"
          variant="standard"
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="localidad"
          name="localidad"
          label="Localidad"
          fullWidth
          autoComplete="localidad"
          variant="standard"
          onChange={handleInputChange}
          error={!!errors.localidad}
          helperText={errors.localidad}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="provincia"
          name="provincia"
          label="Provincia"
          fullWidth
          autoComplete="provincia"
          variant="standard"
          onChange={handleInputChange}
          error={!!errors.provincia}
          helperText={errors.provincia}
        />
      </Grid>
    </Grid>
  );
}

DeliveryForm.propTypes = {};
