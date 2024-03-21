import { MainLayout } from "../../layout";
//import ProductsEcommerce from '../../components/ProductsEcommerce';
//import { ProductDetail } from '../ProductDetail';
//import { ProductCart } from "../../components/ProductCart";
//import Checkout from "../../components/Checkout/checkout";
import { LayoutProducts } from "../../layout/LayoutProducts";
import { useLocation } from "react-router-dom";
import { EnterpriseDetail } from "../../views/EnterpriseDetail";

export const HomeEcommerce = () => {
  const { search } = useLocation();

  if (search) {
    // Crear un objeto URLSearchParams
    const urlParams = new URLSearchParams(search);
    // Obtener el valor asociado con la clave "emprendimiento"
    const enterpriseValue = urlParams.get("emprendimiento");

    return (
      <>
        <MainLayout>
          <EnterpriseDetail info={enterpriseValue} />
          <LayoutProducts info={enterpriseValue}/>
        </MainLayout>
      </>
    );
  } else {
    return (
      <>
        <MainLayout>
          <LayoutProducts />
        </MainLayout>
      </>
    );
  }
};
