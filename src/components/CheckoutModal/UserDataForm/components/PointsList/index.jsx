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
import { usePoints } from "../../../../../hooks/points/usePoint";

export default function PointsList() {
  const [radioValue, setRadioValue] = useState();
  const { dispatch } = useOrder();
  const { points } = usePoints();

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
              {points?.map((point, index) => {
                return (
                  <Grid key={index} item xs={12} sm={6}>
                    <FormControlLabel
                      value={point.id}
                      control={<Radio size="small" name={point.nombre} />}
                      label={`${point.nombre} - ${point.descripcion}`}
                    />
                  </Grid>
                );
              })}
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
