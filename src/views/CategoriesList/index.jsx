import Title from "../../components/Title";
import { MainLayout } from "../../layout";
import DataTable from "../../components/List";
import { GridActionsCellItem } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

import { useEffect, useState } from "react";
import {
  getCategoriesService,
  deleteCategoryService,
} from "../../services/categories.service";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";
import styles from "./categoriesList.module.scss";

export const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const categoriesData = await getCategoriesService();
      setCategories(categoriesData);
      console.log(categoriesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const deleteCategory = async (e, id) => {
    e.preventDefault();
    console.log(id);
    try {
      const result = await deleteCategoryService(id);
      console.log("result", result);
      return result.message;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  };

  function confirmDeleted(e, id) {
    Swal.fire({
      title: "Estás por eliminar una categoria",
      text: "¿Seguro que deseas continuar? Ésta acción es irreversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const remove = deleteCategory(e, id);
        if (remove) {
          Swal.fire(
            "Eliminado!",
            "Categoria eliminada satisfactoriamente",
            "success"
          );
          setTimeout(() => {
            window.location = "/admin/categories";
          }, 1200);
        } else {
          Swal.fire("Error", "No se pudo eliminar la Categoria.", "error");
        }
      }
    });
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "nombre", headerName: "Nombre de la categoria", width: 130 },
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
            <Link to={`/admin/categories/edit/${params.id}`}>
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
          <Title text="Lista de categorias" />
          <div className={styles.containerList}>
            <Link to="/admin/category/create">
              <Button size="medium" variant="outlined" startIcon={<FontAwesomeIcon icon={faPlus} />}>
                Crear categoria
              </Button>
            </Link>
            <DataTable rows={categories} columns={columns} />
          </div>
        </section>
      </MainLayout>
    </>
  );
};
