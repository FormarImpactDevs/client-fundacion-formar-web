import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { GridActionsCellItem } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Swal from "sweetalert2/dist/sweetalert2.js";
import styles from "./enterprisesList.module.scss";
import { MainLayout } from "../../layout";
import Title from "../../components/Title";
import DataTable from "../../components/List";
import { ButtonGoToBack } from "../../components/ButtonGoToBack";
import {
  useEnterprises,
  useDeleteEnterprise,
} from "../../hooks/enterprise/useEnterprise";

export const EnterprisesList = () => {
  const { enterprises } = useEnterprises();
  const { deleteEnterprise } = useDeleteEnterprise();

  function confirmDeleted(e, id) {
    Swal.fire({
      title: "Estás por eliminar un emprendimiento",
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
          const response = await deleteEnterprise(id);
          if (response.status == 201) {
            Swal.fire(
              "¡Eliminado!",
              "Emprendimiento eliminado satisfactoriamente",
              "success"
            );
            setTimeout(() => {
              window.location.reload();
            }, 1200);
          } else {
            Swal.fire(
              "Error",
              "No se pudo eliminar el Emprendimiento.",
              "error"
            );
          }
        } catch (error) {
          console.error("Error al eliminar el emprendimiento:", error);
          Swal.fire("Error", "No se pudo eliminar el Emprendimiento.", "error");
        }
      }
    });
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "nombre", headerName: "Nombre del emprendimiento", width: 130 },
    { field: "descripcion", headerName: "Descripción", width: 130 },
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
            <Link to={`/admin/enterprises/edit/${params.id}`}>
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
        <ButtonGoToBack />
        <section className={styles.mainContainerList}>
          <Title text="Lista de emprendimientos" />
          <div className={styles.containerList}>
            <Link to="/admin/enterprises/create">
              <Button
                size="medium"
                variant="outlined"
                startIcon={<FontAwesomeIcon icon={faPlus} />}
              >
                Crear Emprendimiento
              </Button>
            </Link>
            <DataTable rows={enterprises} columns={columns} />
          </div>
        </section>
      </MainLayout>
    </>
  );
};
