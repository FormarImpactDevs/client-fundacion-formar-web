import { MainLayout } from "../../layout";
import ProductsEcommerce from '../../components/ProductsEcommerce';
import { ProductDetail } from '../../components/ProductDetail';
import { ProductCart } from "../../components/ProductCart";
import Checkout from "../../components/Checkout/checkout";
import { LayoutProducts } from "../../layout/LayoutProducts";

export const HomeEcommerce = () => {
  return (
    <>
      <MainLayout>
        <ProductsEcommerce/>
        <ProductDetail/>
        <ProductCart/>
        <LayoutProducts />
        <Checkout />
      </MainLayout>
    </>
  );
};
