import { MainLayout } from "../../layout";
import { PresentationEcommerce } from "../../views/PresentationEcommerce";
import ProductsEcommerce from '../../components/ProductsEcommerce';
import { ProductDetail } from '../../components/ProductDetail';
import { ProductCart } from "../../components/ProductCart";

export const HomeEcommerce = () => {
  return (
    <>
      <MainLayout>
        <PresentationEcommerce />
        <ProductsEcommerce/>
        <ProductDetail/>
        <ProductCart/>
      </MainLayout>
    </>
  );
};
