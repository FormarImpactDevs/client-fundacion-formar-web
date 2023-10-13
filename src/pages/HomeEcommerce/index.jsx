import { MainLayout } from "../../layout";
import { PresentationEcommerce } from "../../views/PresentationEcommerce";
/* import ProductsEcommerce from '../../components/ProductsEcommerce'; */
import Checkout from "../../components/Checkout/checkout";
import { LayoutProducts } from "../../layout/LayoutProducts";

export const HomeEcommerce = () => {
  return (
    <>
      <MainLayout>
        <PresentationEcommerce />
        <LayoutProducts />
        {/*  <ProductsEcommerce/> */}
        <Checkout />
      </MainLayout>
    </>
  );
};
