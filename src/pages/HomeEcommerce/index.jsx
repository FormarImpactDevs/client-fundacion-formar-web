import { MainLayout } from "../../layout";
import Checkout from "../../components/Checkout/checkout";
import { LayoutProducts } from "../../layout/LayoutProducts";

export const HomeEcommerce = () => {
  return (
    <>
      <MainLayout>
        <LayoutProducts />
        <Checkout />
      </MainLayout>
    </>
  );
};
