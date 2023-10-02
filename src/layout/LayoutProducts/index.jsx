import ProductsEcommerce from "../../components/ProductsEcommerce";
import { SidebarFilterProducts } from "../../components/SidebarFilterProducts";
import styles from "./layoutProducts.module.scss";
/* import PropTypes from "prop-types"; */
import { ProductProvider } from "../../context/ProductProvider";

export const LayoutProducts = () => {
  return (
    <ProductProvider>
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
    </ProductProvider>
  );
};

/* MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}; */
