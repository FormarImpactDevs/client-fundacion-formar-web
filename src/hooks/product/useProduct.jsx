import { useState, useEffect } from "react";
import {
  getProductsService,
  getProductServiceById,
  deleteProductservice,
} from "../../services/products.service";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProductsService();
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        setError("Error al obtener los productos");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, setProducts, error };
};

export const useProductById = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const productData = await getProductServiceById(id);
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        setError("Error al obtener el producto por ID");
        setLoading(false);
      }
    };

    fetchProductById();
  }, [id]);

  return { product, loading, error };
};

export const useProductsByCategory = (categoryId) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      if (categoryId.length !== 0) {
        try {
          const productsData = await getProductsService();
          const filterProducts = productsData.filter((product) =>
            categoryId.includes(product.categoria_id)
          );
          setFilteredProducts(filterProducts.flat());
          setLoading(false);
        } catch (error) {
          setError("Error al obtener los productos por categoría");
          setLoading(false);
        }
      }
    };

    fetchProductsByCategory();
  }, [categoryId]);

  return { filteredProducts, loading, error };
};

export const useSearchedProducts = (products, searchedWord) => {
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    const searchProducts = () => {
      if (searchedWord.length === 0) {
        setSearchedProducts([]);
      } else {
        const searchedWordLower = searchedWord.toLowerCase();
        const productsFiltered = products.filter((product) => {
          const nameProductLower = product.nombre.toLowerCase();
          const descriptionProductLower = product.descripcion.toLowerCase();
          return (
            nameProductLower.includes(searchedWordLower) ||
            descriptionProductLower.includes(searchedWordLower)
          );
        });
        setSearchedProducts(productsFiltered);
      }
    };

    searchProducts();
  }, [products, searchedWord]);

  return searchedProducts;
};

export const useFilteredProducts = (
  products,
  productsFiltered,
  valueInputSearch
) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filterProducts = async () => {
      let result = [];
      if (productsFiltered.length > 0) {
        result = await searchProducts(productsFiltered, valueInputSearch);
      } else {
        result = await searchProducts(products, valueInputSearch);
      }
      setFilteredProducts(result);
    };

    filterProducts();
  }, [products, productsFiltered, valueInputSearch]);

  return filteredProducts;
};

async function searchProducts(products, searchedWord) {
  if (searchedWord.length === 0) {
    return [];
  } else {
    const searchedWordLower = searchedWord.toLowerCase();
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
}

export const useDeleteProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      const result = await deleteProductservice(id);
      setLoading(false);
      return result;
    } catch (error) {
      setError("Error al eliminar el producto");
      setLoading(false);
      return error.message;
    }
  };

  return { deleteProduct, loading, error };
};
