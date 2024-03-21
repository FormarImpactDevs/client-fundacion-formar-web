import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import PropTypes from "prop-types";
import { useOrder } from "../../../../../context/orderContext";
import { useState } from "react";
import { useEffect } from "react";

export default function PointsList() {
  const [radioValue, setRadioValue] = useState();
  const { dispatch } = useOrder();

  useEffect(() => {
    dispatch({
      type: "CARGAR_PUNTO_DE_RETIRO",
      payload: radioValue,
    });
  }, [radioValue]);
  function handleRadioChange(event) {
    setRadioValue(event.target.value);
  }
  return (
    <div className="checkboxes">
      <Box sx={{ display: "flex" }}>
        <FormControl row component="fieldset" variant="standard">
          <RadioGroup
            name="PuntoDeRetiroSelection"
            value={radioValue}
            onChange={handleRadioChange}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between" // Espacio entre las dos columnas
              alignItems="center" // Alineación superior
            >
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  row
                  value="1"
                  control={<Radio size="small" name="FlorestaCABA" />}
                  label="Floresta CABA"
                />
                <FormControlLabel
                  row
                  value="2"
                  control={<Radio size="small" name="Boulogne" />}
                  label="Boulogne"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  row
                  value="3"
                  control={<Radio size="small" name="PoloDePalermo" />}
                  label="Polo de Palermo CABA"
                />
                <FormControlLabel
                  row
                  value="4"
                  control={<Radio size="small" name="Benavidez" />}
                  label="Benavidez"
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
}

PointsList.propTypes = {
  radioValue: PropTypes.string,
  handleRadioChange: PropTypes.func,
};
