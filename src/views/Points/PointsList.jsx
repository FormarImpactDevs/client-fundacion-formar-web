import Title from "../../components/Title";
import { MainLayout } from "../../layout";
import DataTable from "../../components/List";
import { GridActionsCellItem } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import {
  getPointsService,
  deletePointService
} from "../../services/points.service";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2/dist/sweetalert2.js";

/* import "sweetalert2/src/sweetalert2.scss"; */
import styles from "../EnterprisesList/enterprisesList.module.scss";
import { ButtonGoToBack } from "../../components/ButtonGoToBack";

export const PointsList = () => {
  const [points, setPoints] = useState([]);

  const getPoints = async () => {
    try {
      const pointsData = await getPointsService();
      setPoints(pointsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPoints();
  }, []);

  const deletePoint = async (e, id) => {
    e.preventDefault();
    try {
      const result = await deletePointService(id);
      return result.message;
    } catch (error) {
      return error.message;
    }
  };

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
    }).then((result) => {
      if (result.isConfirmed) {
        const remove = deletePoint(e, id);
        if (remove) {
          Swal.fire(
            "Eliminado!",
            "punto de retiro eliminado satisfactoriamente",
            "success"
          );
          setTimeout(() => {
            window.location = "/admin/points";
          }, 1200);
        } else {
          Swal.fire("Error", "No se pudo eliminar el punto de retiro.", "error");
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
      </MainLayout>
    </>
  );
};
