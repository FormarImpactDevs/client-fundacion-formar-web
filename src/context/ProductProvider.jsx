import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
import { useForm } from "../hooks/useForm";
import PropTypes from "prop-types";
import {
  getProductsService,
  getProductServiceById,
} from "../services/products.service";
import {
  getCategoriesService,
  getCategoryServiceById,
} from "../services/categories.service";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  /*   const [allProducts, setAllProducts] = useState(true); */
  const [productsReady, setProductsReady] = useState(false);
  const [searchProducts, setSearchProducts] = useState([]);
  const [valueInputSearch, setValueInputSearch] = useState("");

  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});

  // Utilizo CustomHook - useForm
  const { formValues, handleInputChange, reset } = useForm({
    valueSearch: "",
  });

  // Estados generales para la aplicación
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const ProductsData = await getProductsService();
      setProducts(ProductsData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!productsReady) {
      getProducts();
      setProductsReady(true);
    }
  }, [products]);

  // Obtener producto por id
  const getProductById = async (id) => {
    try {
      const ProductData = await getProductServiceById(id);
      setProduct(ProductData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect((id) => {
    getProductById(id);
  }, []);

  // Lista de categorías
  const getCategories = async () => {
    try {
      const CategoriesData = await getCategoriesService();
      setCategories(CategoriesData);
    } catch (error) {
      console.log(error);
    }
  };
  const getCategoryById = async (id) => {
    try {
      const CategoriesData = await getCategoryServiceById(id);
      return CategoriesData;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  // Lista de los productos filtrados por categoría
  const [categoryState, setCategoryState] = useState({});
  const [categoryId, setCategoryId] = useState([]);

  const productsByCategories = async () => {
    if (categoryId.length !== 0) {
      try {
        setProductsFiltered([]); // Limpia el array antes de agregar nuevos productos

        const promises = categoryId.map(async (category) => {
          const result = await getCategoryById(category);
          return result.products;
        });

        const products = await Promise.all(promises);
        setProductsFiltered(products.flat());
        console.log(productsFiltered);
      } catch (error) {
        setProductsFiltered([]);
        console.log(error);
      }
    } else {
      setProductsFiltered([]);
      console.error("No hay nada");
    }
  };

  useEffect(() => {
    productsByCategories();
  }, [categoryId]);

  const searchedProducts = (products, searchedWord) => {
    if (searchedWord.length == 0) {
      return [];
    } else {
      // Convierte la palabra buscada a minúsculas para hacer una búsqueda insensible a mayúsculas/minúsculas
      const searchedWordLower = searchedWord.toLowerCase();
      // Filtra los productos que coincidan con la palabra buscada en su name o categoría
      const productsFiltered = products.filter((product) => {
        const nameProductLower = product.nombre.toLowerCase();
        const descriptionProductLower = product.descripcion.toLowerCase();

        return (
          nameProductLower.includes(searchedWordLower) ||
          descriptionProductLower.includes(searchedWordLower)
        );
      });

      return productsFiltered;
    }
  };

  const getFilteredProducts = async () => {
    if (productsFiltered.length > 0) {
      let result = await searchedProducts(productsFiltered, valueInputSearch);
      setSearchProducts(result);
    } else {
      let result = await searchedProducts(products, valueInputSearch);
      setSearchProducts(result);
    }
  };
  useEffect(() => {
    getFilteredProducts();
  }, [valueInputSearch]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        product,
        setProduct,
        productsFiltered,
        setProductsFiltered,

        categories,
        setCategories,
        category,
        setCategory,

        formValues,
        handleInputChange,
        reset,
        loading,
        setLoading,

        categoryState,
        setCategoryState,
        categoryId,
        setCategoryId,
        productsByCategories,
        valueInputSearch,
        setValueInputSearch,
        searchProducts,
        productsReady,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
