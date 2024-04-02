import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useFetchData = (fetchFunction) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchFunction(id);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id, fetchFunction]);

  return { data, isLoading, error };
};

export default useFetchData;
