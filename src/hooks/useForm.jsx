import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleFileChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.files[0],
    });
  };

  const reset = () => {
    setFormValues(initialState);
  };

  return {
    formValues,
    setFormValues,
    handleInputChange,
    handleFileChange,
    reset,
  };
};
