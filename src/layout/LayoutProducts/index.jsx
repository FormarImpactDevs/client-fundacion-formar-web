import ProductsEcommerce from "../../components/ProductsEcommerce";
import { SidebarFilterProducts } from "../../components/SidebarFilterProducts";
import Title from "../../components/Title";
import styles from "./layoutProducts.module.scss";

export const LayoutProducts = () => {
  return (
    <>
      <Title text="Productos" />
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
    </>
  );
};
