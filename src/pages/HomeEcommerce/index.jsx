import { MainLayout } from "../../layout";
import { PresentationEcommerce } from "../../views/PresentationEcommerce";
import ProductsEcommerce from '../../components/ProductsEcommerce';
import Checkout from "../../components/Checkout/checkout";

export const HomeEcommerce = () => {
  return (
    <>
      <MainLayout>
        <PresentationEcommerce />
        <ProductsEcommerce/>
        <Checkout />
      </MainLayout>
    </>
  );
};
