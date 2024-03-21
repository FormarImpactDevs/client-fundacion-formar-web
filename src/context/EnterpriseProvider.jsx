import { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
import { getEnterprisesService } from "../services/enterprises.service";

const EnterprisesContext = createContext();

const EnterprisesProvider = ({ children }) => {
  const [enterprises, setEnterprises] = useState([]);

  const getEnterprises = async () => {
    try {
      const EnterprisesData = await getEnterprisesService();
      setEnterprises(EnterprisesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEnterprises();
  }, []);

  return (
    <EnterprisesContext.Provider value={enterprises}>
      {children}
    </EnterprisesContext.Provider>
  );
};

EnterprisesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { EnterprisesContext, EnterprisesProvider };

/* export { EnterprisesContext}; */
