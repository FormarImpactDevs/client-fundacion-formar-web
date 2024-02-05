import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  getEnterprisesService,
  deleteEnterpriseService,
  getEnterpriseServiceById,
} from "../../services/enterprises.service";
import { EnterpriseContext } from "./EnterpriseContext";

/* const EnterprisesContext = createContext(); */

export const EnterpriseProvider = ({ children }) => {

  const [enterprises, setEnterprises] = useState([]);
  const [enterprise, setEnterprise] = useState([]);

  const getEnterprises = async () => {
    try {
      const EnterprisesData = await getEnterprisesService();
      setEnterprises(EnterprisesData);
      console.log(EnterprisesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEnterprises();
  }, []);

  const deleteEnterprise = async (e, id) => {
    e.preventDefault();
    try {
      const result = await deleteEnterpriseService(id);
      return result.message;
    } catch (error) {
      return error.message;
    }
  };

  const getEnterpriseById = async (id) => {
    try {
      const EnterpriseData = await getEnterpriseServiceById(id);
      setEnterprise(EnterpriseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEnterpriseById(enterprise.id);
  }, [enterprise.id]);

  const values = {
    getEnterprises,
    enterprises,
    setEnterprises,
    deleteEnterprise,
    enterprise, 
    setEnterprise,
    getEnterpriseById
  };

  return (
    <EnterpriseContext.Provider value={values}>
      {children}
    </EnterpriseContext.Provider>
  );
};

EnterpriseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
