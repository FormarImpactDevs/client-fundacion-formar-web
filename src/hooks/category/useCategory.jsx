import { useState, useEffect } from "react";
import {
  getCategoriesService,
  getCategoryServiceById,
  deleteCategoryService,
} from "../../services/categories.service";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategoriesService();
        setCategories(categoriesData);
        setLoading(false);
      } catch (error) {
        setError("Error al obtener las categorías");
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, setCategories,error };
};

export const useCategoryById = (id) => {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryById = async () => {
      try {
        const categoryData = await getCategoryServiceById(id);
        setCategory(categoryData);
        setLoading(false);
      } catch (error) {
        setError("Error al obtener la categoría por ID");
        setLoading(false);
      }
    };

    fetchCategoryById();
  }, [id]);

  return { category, loading, error };
};

export const useDeleteCategory = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteCategory = async (categoryId, categoryProducts) => {
    setLoading(true);
    try {
      const result = await deleteCategoryService(categoryId, categoryProducts);
      setLoading(false);
      return result;
    } catch (error) {
      setError("Error al eliminar la categoría");
      setLoading(false);
      return error.message;
    }
  };

  return { deleteCategory, loading, error };
};
