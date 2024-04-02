import PropTypes from "prop-types";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  styled,
} from "@mui/material";

// Estilos personalizados para el FormControl
const StyledFormControl = styled(FormControl)({
  width: "100%",
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

// Componente de selección reutilizable
const SelectInput = ({ label, options, value, onChange }) => {
  return (
    <StyledFormControl>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.nombre} value={option.id}>
            {option.nombre}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

// PropTypes
SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectInput;
