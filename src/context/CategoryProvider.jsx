import { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
import { getCategoriesService } from "../services/categories.service";

const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const CategoriesData = await getCategoriesService();
      setCategories(CategoriesData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

CategoriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CategoriesContext, CategoriesProvider };
