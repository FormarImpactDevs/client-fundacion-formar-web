import { useEffect, useState } from "react";
import {
  getPointsService,
  getPointServiceById,
  deletePointService,
} from "../../services/points.service";

// Hook personalizado para obtener todos los puntos de retiro
export const usePoints = () => {
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const PointsData = await getPointsService();
        setPoints(PointsData);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los puntos de retiro:", error);
      }
    };

    fetchPoints();
  }, []);

  return { points, loading, setPoints };
};

// Hook personalizado para obtener un punto de retiro por su ID
export const usePointById = (id) => {
  const [point, setPoint] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPointById = async () => {
      setLoading(true);
      try {
        const pointData = await getPointServiceById(id);
        console.log(pointData);
        setPoint(pointData);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener el punto de retiro por ID:", error);
      }
    };
    fetchPointById();
  }, [id]);

  return { point, loading };
};

// Hook personalizado para la acción de eliminar un punto de retiro
export const useDeletePoint = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const deletePoint = async (id) => {
    setLoading(true);
    try {
      const result = await deletePointService(id);
      setMessage(result.message);
      console.log(result, "hook");
      return result
    } catch (error) {
      console.error("Error al eliminar el punto de retiro:", error);
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { deletePoint, message, loading };
};
