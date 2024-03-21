/* import { useParams, useLocation } from 'react-router-dom'; */
import PropTypes from "prop-types";
import ProductsEcommerce from "../../components/ProductsEcommerce";
import { SidebarFilterProducts } from "../../components/SidebarFilterProducts";
import styles from "./layoutProducts.module.scss";

export const LayoutProducts = ({ info }) => {
  /*   const { search } = useLocation();
  console.log(useLocation());
  console.log(search); */
  if (info) {
    return (
      <div>
        <div className={styles.mainContent}>
          <ProductsEcommerce emprendimientoId={info}/>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <SidebarFilterProducts />
          {/* <!-- Contenido de la primera columna (25%) --> */}
        </div>
        <div className={styles.mainContent}>
          {/* <!-- Contenido de la segunda columna (75%) --> */}
          <ProductsEcommerce />
        </div>
      </div>
    );
  }
};

LayoutProducts.propTypes = {
  info: PropTypes.number,
};
