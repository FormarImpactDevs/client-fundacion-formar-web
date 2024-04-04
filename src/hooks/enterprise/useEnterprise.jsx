import { useEffect, useState } from "react";
import {
  getEnterprisesService,
  deleteEnterpriseService,
  getEnterpriseServiceById,
} from "../../services/enterprises.service";

// Hook personalizado para obtener la lista de todos los emprendimientos
export const useEnterprises = () => {
  const [enterprises, setEnterprises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnterprises = async () => {
      try {
        const enterprisesData = await getEnterprisesService();
        setEnterprises(enterprisesData);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener la lista de emprendimientos:", error);
      }
    };

    fetchEnterprises();

    // Cleanup: No es necesario en este caso, pero podría ser útil en otros escenarios
  }, []);

  return { enterprises, loading , setEnterprises};
};

// Hook personalizado para obtener un emprendimiento por su ID
export const useEnterpriseById = (id) => {
  const [enterprise, setEnterprise] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnterpriseById = async () => {
      try {
        const enterpriseData = await getEnterpriseServiceById(id);
        setEnterprise(enterpriseData);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener el emprendimiento por ID:", error);
      }
    };

    fetchEnterpriseById();

    // Cleanup: No es necesario en este caso, pero podría ser útil en otros escenarios
  }, [id]);

  return { enterprise, loading };
};

// Hook personalizado para la acción de eliminar un emprendimiento
export const useDeleteEnterprise = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const deleteEnterprise = async (id) => {
    setLoading(true);
    try {
      const result = await deleteEnterpriseService(id);
      setMessage(result.message);
      return result;
    } catch (error) {
      console.error("Error al eliminar el emprendimiento:", error);
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteEnterprise, message, loading };
};
