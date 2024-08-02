/* import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MainLayout } from "../../layout";
//import ProductsEcommerce from '../../components/ProductsEcommerce';
//import { ProductDetail } from '../ProductDetail';
//import { ProductCart } from "../../components/ProductCart";
//import Checkout from "../../components/Checkout/checkout";
import { LayoutProducts } from "../../layout/LayoutProducts";
import { EnterpriseDetail } from "../../views/EnterpriseDetail";


export const HomeEcommerce = () => {
  const { search } = useLocation();

  if (search) {
    // Crear un objeto URLSearchParams
    const urlParams = new URLSearchParams(search);
    // Obtener el valor asociado con la clave "emprendimiento"
    const enterpriseId = urlParams.get("emprendimiento");

    return (
      <>
        <MainLayout>
          <EnterpriseDetail info={enterpriseId} />
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
 */

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MainLayout } from "../../layout";
import { LayoutProducts } from "../../layout/LayoutProducts";
import { EnterpriseDetail } from "../../views/EnterpriseDetail";

export const HomeEcommerce = () => {
  const [enterpriseId, setEnterpriseId] = useState(null);
  const { search } = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(search);
    const id = urlParams.get("emprendimiento");
    setEnterpriseId(id);
  }, [search]);

  return (
    <MainLayout>
      {enterpriseId ? (
        <EnterpriseDetail info={enterpriseId} />
      ) : (
        <LayoutProducts />
      )}
    </MainLayout>
  );
};
