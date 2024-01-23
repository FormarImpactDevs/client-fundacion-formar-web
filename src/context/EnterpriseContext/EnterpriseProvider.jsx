import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getEnterprisesService } from "../services/enterprises.service";
import { EnterpriseContext } from "./EnterpriseContext";

/* const EnterprisesContext = createContext(); */

export const EnterprisesProvider = ({ children }) => {
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
    <EnterpriseContext.Provider value={enterprises}>
      {children}
    </EnterpriseContext.Provider>
  );
};

EnterprisesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
