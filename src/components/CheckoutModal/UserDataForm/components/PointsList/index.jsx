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
  const { dispatch } = useOrder()


  useEffect(() => {
    dispatch({
        type: "CARGAR_PUNTO_DE_RETIRO",
        payload: radioValue
    })
  }, [radioValue])
  function handleRadioChange (event) {
    setRadioValue(event.target.value);
  }
  return (
    <div className="checkboxes">
      <Box sx={{ display: "flex" }}>
        <FormControl sx={{ m: 3 }} row component="fieldset" variant="standard">
          <Grid
            container
            direction="row"
            justifyContent="space-between" // Espacio entre las dos columnas
            alignItems="flex-start" // Alineación superior
          >
            <RadioGroup
              name="PuntoDeRetiroSelection"
              value={radioValue}
              onChange={handleRadioChange}
            >
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  row
                  value="FlorestaCABA"
                  control={<Radio size="small" name="FlorestaCABA" />}
                  label="Floresta CABA"
                />
                <FormControlLabel
                  row
                  value="Boulogne"
                  control={<Radio size="small" name="Boulogne" />}
                  label="Boulogne"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  row
                  value="PoloDePalermo"
                  control={<Radio size="small" name="PoloDePalermo" />}
                  label="Polo de Palermo CABA"
                />
                <FormControlLabel
                  row
                  value="Benavidez"
                  control={<Radio size="small" name="Benavidez" />}
                  label="Benavidez"
                />
              </Grid>
            </RadioGroup>
          </Grid>
        </FormControl>
      </Box>
    </div>
  );
}

PointsList.propTypes = {
  radioValue: PropTypes.string,
  handleRadioChange: PropTypes.func,
};
