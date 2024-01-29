import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./enterpriseDetail.module.scss";
import Title from "../../components/Title";
import { Loading } from "../../components/Loading";
import { EnterpriseContext } from "../../context/EnterpriseContext/EnterpriseContext";
import { ProductContext } from "../../context/ProductContext";

export const EnterpriseDetail = ({ info }) => {
  const { enterprise, setEnterprise, getEnterpriseById,  } =
    useContext(EnterpriseContext);
const { products, setProducts, EmprendimientosProducts } = useContext(ProductContext);
  const [isLoading, setIsLoading] = useState(true);

  const getEnterprise = async (info) => {
    let data = await getEnterpriseById(info);
    if (data) {
      setEnterprise(data);
      setProducts(data.products);
      console.log(products);
    }
  };
  useEffect(() => {
    getEnterprise(info);
    setIsLoading(false);
    EmprendimientosProducts(info)
  }, []);

  /*   useEffect((enterpriseId) => {
    EmprendimientosProducts(enterpriseId)
  }, []) */
  return (
    <>
      {!isLoading ? (
        <section className={styles.container}>
        <section className={styles.containerImages}>
          <figure className={styles.imageFoto_card}>
            <img src={enterprise.foto_card} alt={enterprise.nombre} />
          </figure>
          <figure className={styles.imageFoto_emprendimiento}>
            <img
              src={enterprise.foto_emprendimiento}
              alt={enterprise.nombre}
            />
          </figure>
        </section>
        <section className={styles.infoEnterprise}>
          <Title text={enterprise.nombre} />
          <p>{enterprise.descripcion}</p>
        </section>
      </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

EnterpriseDetail.propTypes = {
  info: PropTypes.number,
};
