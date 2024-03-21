import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import styles from "./CategoriesList.module.scss";
import Title from "../../components/Title";
import { MainLayout } from "../../layout";
import DataTable from "../../components/List";
import { GridActionsCellItem } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import {
  getCategoriesService,
  deleteCategoryService,
} from "../../services/categories.service";
import { ButtonGoToBack } from "../../components/ButtonGoToBack";

export const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const CategoriesData = await getCategoriesService();
      console.log(CategoriesData);
      setCategories(CategoriesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const deleteCategories = async (e, id) => {
    e.preventDefault();
    try {
      const result = await deleteCategoryService(id);
      return result.message;
    } catch (error) {
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
        const remove = deleteCategories(e, id);
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
          Swal.fire("Error", "No se pudo eliminar la categoria.", "error");
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
            <Link to={`/admin/category/edit/${params.id}`}>
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
    <MainLayout>
      <ButtonGoToBack />
      <section className={styles.mainContainerList}>
        <Title text="Lista de categorias" />
        <div className={styles.containerList}>
          <Link to="/admin/category/create">
            <Button
              size="medium"
              variant="outlined"
              startIcon={<FontAwesomeIcon icon={faPlus} />}
            >
              Crear Categoria
            </Button>
          </Link>
          <DataTable rows={categories} columns={columns} />
        </div>
      </section>
    </MainLayout>
  );
};
