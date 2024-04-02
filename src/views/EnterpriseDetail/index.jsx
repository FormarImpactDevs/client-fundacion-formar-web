import PropTypes from "prop-types";
import styles from "./enterpriseDetail.module.scss";
import Title from "../../components/Title";
import { Loading } from "../../components/Loading";

import { useEnterpriseById } from "../../hooks/enterprise/useEnterprise";
import ProductsOfEnterprise from "../../components/ProductsEcommerce/ProductsOfEnterprise";

export const EnterpriseDetail = ({ info }) => {
  // Utilizar el hook personalizado para obtener la información de la empresa
  const { enterprise, loading } = useEnterpriseById(info);
  let imgDefault =
    "http://localhost:3000//images/imagesEnterprises/default-image.png";
  return (
    <>
      {!loading ? (
        <>
          <section className={styles.container}>
            <section className={styles.containerImages}>
              <figure className={styles.imageFoto_card}>
                <img
                  src={enterprise.foto_card ? enterprise.foto_card : imgDefault}
                  alt={enterprise.nombre}
                />
              </figure>
              <figure className={styles.imageFoto_emprendimiento}>
                <img
                  src={
                    enterprise.foto_emprendimiento
                      ? enterprise.foto_emprendimiento
                      : imgDefault
                  }
                  alt={enterprise.nombre}
                />
              </figure>
            </section>
            <section className={styles.infoEnterprise}>
              <Title text={enterprise.nombre} />
              <p>{enterprise.descripcion}</p>
            </section>
          </section>

          <div>
            <div className={styles.mainContent}>
              <ProductsOfEnterprise emprendimiento={enterprise.products} />
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

EnterpriseDetail.propTypes = {
  info: PropTypes.number,
};
