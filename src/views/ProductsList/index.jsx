import Title from "../../components/Title";
import { MainLayout } from "../../layout";
import DataTable from "../../components/List";
import { GridActionsCellItem } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import {
  getProductsService,
  deleteProductService,
} from "../../services/products.service";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";
import styles from "./productsList.module.scss";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const ProductsData = await getProductsService();
    setProducts(ProductsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (e, id) => {
    e.preventDefault();
    try {
      const result = await deleteProductService(id);
      return result.message;
    } catch (error) {
      return error.message;
    }
  };

  function confirmDeleted(e, id) {
    Swal.fire({
      title: "Estás por eliminar un producto",
      text: "¿Seguro que deseas continuar? Ésta acción es irreversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const remove = deleteProduct(e, id);
        if (remove) {
          Swal.fire(
            "Eliminado!",
            "Producto eliminado satisfactoriamente",
            "success"
          );
          setTimeout(() => {
            window.location = "/admin/products";
          }, 1200);
        } else {
          Swal.fire("Error", "No se pudo eliminar el Producto.", "error");
        }
      }
    });
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "nombre", headerName: "Nombre del producto", width: 130 },
    { field: "precio", headerName: "Precio", width: 130 },
    { field: "descripcion", headerName: "Descripción", width: 130 },
    { field: "stock", headerName: "Stock", width: 130 },
    { field: "emprendimientos_id", headerName: "Nombre del emprendimiento", width: 130 },
    { field: "categoria_id", headerName: "Nombre de la categoria", width: 130 },
    {
      headerName: "Acciones",
      field: "actions",
      type: "actions",
      width: 130,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<FontAwesomeIcon icon={faTrash} />}
          label="Delete"
          key={params.id}
          onClick={(e) => confirmDeleted(e, params.id)}
        />,
        <GridActionsCellItem
          icon={
            <Link to={`/admin/products/edit/${params.id}`}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Link>
          }
          label="Editar"
          key={params.name}
        />,
      ],
    },
  ];

  return (
    <>
      <MainLayout>
        <section className={styles.mainContainerList}>
          <Title text="Lista de productos" />
          <div className={styles.containerList}>
            <Link to="/admin/products/create">
              <Button
                size="medium"
                variant="outlined"
                startIcon={<FontAwesomeIcon icon={faPlus} />}
              >
                Crear Producto
              </Button>
            </Link>
            <DataTable rows={products} columns={columns} />
          </div>
        </section>
      </MainLayout>
    </>
  );
};
