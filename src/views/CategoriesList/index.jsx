import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import styles from "./categoriesList.module.scss";
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
  const { categories, loading, setCategories } = useCategories();
  const { deleteCategory } = useDeleteCategory();

  async function confirmDeleted(id) {
    const categoriesFilter = categories.filter(
      (category) => category.id !== id
    );
    try {
      // Crear un modal con opciones de selección y botones adicionales
      const { value: action } = await Swal.fire({
        title: "Reasignar o Eliminar Productos",
        html:
          `<select id="category-select" class="swal2-input">` +
          categoriesFilter
            .map(
              (category) =>
                `<option value="${category.id}">${category.nombre}</option>`
            )
            .join("") +
          "</select>",
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonColor: "#75aadb",
        denyButtonColor: "#d33",
        cancelButtonColor: "#58595b",
        confirmButtonText: "Reasignar",
        denyButtonText: "Eliminar Productos",
        cancelButtonText: "Cancelar",
        preConfirm: () => {
          const newCategoryId =
            document.getElementById("category-select").value;
          return {
            action: "reassign",
            newCategoryId,
          };
        },
        preDeny: () => {
          return {
            action: "delete",
          };
        },
      });

      if (!action) {
        // Si el usuario cancela la acción, salir de la función sin hacer nada
        return;
      }

      // Confirmación final antes de eliminar la categoría
      const confirmResult = await Swal.fire({
        title: "Estás por eliminar una categoría",
        text: "¿Seguro que deseas continuar? Esta acción es irreversible",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#75aadb",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!",
        cancelButtonText: "Cancelar",
      });

      if (confirmResult.isConfirmed) {
        let response;
        if (action.action === "reassign") {
          response = await deleteCategory(id, action.newCategoryId);
        } else if (action.action === "delete") {
          response = await deleteCategory(id, null);
        }
        if (response.status == 201) {
          Swal.fire("Eliminado!", `${response.msg}`, "success");
          setCategories((prevCategories) =>
            prevCategories.filter((category) => category.id !== id)
          );
        } else {
          Swal.fire(
            "Error",
            "No se pudo eliminar la categoría.",
            `${response.msg}`
          );
        }
      }
    } catch (error) {
      console.error("Error al intentar eliminar una categoría:", error);
      Swal.fire("Error", "No se pudo completar la acción.", "error");
    }
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
          onClick={() => confirmDeleted(params.id)}
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
