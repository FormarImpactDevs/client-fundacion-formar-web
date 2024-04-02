import Title from "../../components/Title";
import { MainLayout } from "../../layout";
import DataTable from "../../components/List";
import { Loading } from "../../components/Loading";
import { GridActionsCellItem } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2/dist/sweetalert2.js";

import styles from "../EnterprisesList/enterprisesList.module.scss";
import { ButtonGoToBack } from "../../components/ButtonGoToBack";
import { usePoints, useDeletePoint } from "../../hooks/points/usePoint";

export const PointsList = () => {
  const { points, loading } = usePoints();
  const { deletePoint } = useDeletePoint();

  function confirmDeleted(e, id) {
    Swal.fire({
      title: "Estás por eliminar un punto de retiro",
      text: "¿Seguro que deseas continuar? Ésta acción es irreversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, eliminar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await deletePoint(id);
          console.log(response);
          if (response.status == 201) {
            Swal.fire(
              "Eliminado!",
              "punto de retiro eliminado satisfactoriamente",
              "success"
            );
            setTimeout(() => {
              window.location.reload();
            }, 1200);
          } else {
            Swal.fire(
              "Error",
              "No se pudo eliminar el punto de retiro.",
              "error"
            );
          }
        } catch (error) {
          console.error("Error al eliminar el punto de retiro:", error);
          Swal.fire(
            "Error",
            "No se pudo eliminar el punto de retiro.",
            "error"
          );
        }
      }
    });
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "nombre", headerName: "Punto de retiro", width: 130 },
    { field: "descripcion", headerName: "Descripción", width: 130 },
    { field: "telefono", headerName: "Teléfono", width: 130 },
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
            <Link to={`/admin/points/edit/${params.id}`}>
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
        {loading ? (
          <Loading />
        ) : (
          <section className={styles.mainContainerList}>
            <Title text="Lista de punto de retiros" />
            <div className={styles.containerList}>
              <Link to="/admin/points/create">
                <Button
                  size="medium"
                  variant="outlined"
                  startIcon={<FontAwesomeIcon icon={faPlus} />}
                >
                  Crear punto de retiro
                </Button>
              </Link>
              <DataTable rows={points} columns={columns} />
            </div>
          </section>
        )}
      </MainLayout>
    </>
  );
};
