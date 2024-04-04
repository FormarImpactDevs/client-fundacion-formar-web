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
import { ButtonGoToBack } from "../../components/ButtonGoToBack";
import {
  useCategories,
  useDeleteCategory,
} from "../../hooks/category/useCategory";
import { Loading } from "../../components/Loading";

export const CategoriesList = () => {
  const { categories, loading, setCategories} = useCategories();
  const { deleteCategory } = useDeleteCategory();

  async function confirmDeleted(e, id) {
    Swal.fire({
      title: "Estás por eliminar una categoria",
      text: "¿Seguro que deseas continuar? Ésta acción es irreversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await deleteCategory(id);
          if (response.status == 201) {
            Swal.fire(
              "Eliminado!",
              "Categoria eliminada satisfactoriamente",
              "success"
            );
            setCategories(prevCategories => prevCategories.filter(category => category.id !== id))
          } else {
            Swal.fire("Error", "No se pudo eliminar la categoria.", "error");
          }
        } catch (error) {
          console.error("Error al eliminar la categoría:", error);
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
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </MainLayout>
  );
};
