import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MainLayout } from "../../layout";
//import ProductsEcommerce from '../../components/ProductsEcommerce';
//import { ProductDetail } from '../ProductDetail';
//import { ProductCart } from "../../components/ProductCart";
//import Checkout from "../../components/Checkout/checkout";
import { LayoutProducts } from "../../layout/LayoutProducts";
/* import { getEnterpriseById } from "../../services/enterprises.service"; */
import { EnterpriseDetail } from "../../views/EnterpriseDetail";

/* import { useEnterpriseById  } from "../../hooks/enterprise/useEnterprise"; */

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
