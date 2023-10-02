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
  const [allProducts, setAllProducts] = useState(true);
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
    getProducts();
  }, []);

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
        console.log(error);
      }
    } else {
      console.log("No hay nada");
    }
  };

  useEffect(() => {
    productsByCategories();
  }, [categoryId]);

  const productsAll = () => {
    if (productsFiltered) {
      setAllProducts(false);
    } else {
      setAllProducts(true);
    }
  };

  useEffect(() => {
    productsAll();
  }, []);


  const searchedProducts = (products, searchedWord) => {
    // Convierte la palabra buscada a minúsculas para hacer una búsqueda insensible a mayúsculas/minúsculas
    const searchedWordLower = searchedWord.toLowerCase();
    /* console.log(searchedWord);
    console.log(products); */
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

  useEffect(() => {
    let result = searchedProducts(products, valueInputSearch)
    setSearchProducts(result);
    console.log(searchProducts);
  }, [valueInputSearch]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        product,
        setProduct,
        productsFiltered,
        allProducts,

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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
