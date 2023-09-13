import Title from "../../components/Title";
import { MainLayout } from "../../layout";
import DataTable from "../../components/List";
import { GridActionsCellItem } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

//import useEnterprises from "../../hooks/useEnterprises";
import { useEffect, useState } from "react";
import {
  getEnterprisesService,
  deleteEnterpriseService,
} from "../../services/enterprises.service";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";
import styles from "./enterprisesList.module.scss";

export const EnterprisesList = () => {
  const [enterprises, setEnterprises] = useState([]);

  const getEnterprises = async () => {
    try {
      const EnterprisesData = await getEnterprisesService();
      setEnterprises(EnterprisesData);
      console.log(EnterprisesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEnterprises();
  }, []);

  const deleteEnterprise = async (e, id) => {
    e.preventDefault();
    console.log(id);
    try {
      const result = await deleteEnterpriseService(id);
      console.log("result", result);
      return result.message;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  };

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
    }).then((result) => {
      if (result.isConfirmed) {
        const remove = deleteEnterprise(e, id);
        if (remove) {
          Swal.fire(
            "Eliminado!",
            "Emprendimiento eliminado satisfactoriamente",
            "success"
          );
          setTimeout(() => {
            window.location = "/admin/enterprises";
          }, 1200);
        } else {
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
        <section className={styles.mainContainerList}>
          <Title text="Lista de emprendimientos" />
          <div className={styles.containerList}>
            <Link to="/admin/enterprises/create">
              <Button size="medium" variant="outlined" startIcon={<FontAwesomeIcon icon={faPlus} />}>
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
