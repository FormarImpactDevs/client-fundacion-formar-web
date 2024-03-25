import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  getCategoriesService,
  getCategoryServiceById,
} from "../../services/categories.service";
import { CategoryContext } from "./CategoryContext";

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});

  // Lista de categorías
  const getCategories = async () => {
    try {
      const CategoriesData = await getCategoriesService();
      setCategories(CategoriesData);
    } catch (error) {
      throw new Error(error);
    }
  };
  const getCategoryById = async (id) => {
    try {
      const CategoriesData = await getCategoryServiceById(id);
      return CategoriesData;
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const values = {
    categories,
    setCategories,
    category,
    setCategory,
    getCategoryById
  };

  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  );
};

CategoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
