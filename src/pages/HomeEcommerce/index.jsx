import { MainLayout } from "../../layout";
import ProductsEcommerce from '../../components/ProductsEcommerce';
import Checkout from "../../components/Checkout/checkout";
import { LayoutProducts } from "../../layout/LayoutProducts";

export const HomeEcommerce = () => {
  return (
    <>
      <MainLayout>
        <ProductsEcommerce/>
        <LayoutProducts />
        <Checkout />
      </MainLayout>
    </>
  );
};
