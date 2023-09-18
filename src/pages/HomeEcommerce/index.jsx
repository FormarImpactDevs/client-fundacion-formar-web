import { MainLayout } from "../../layout";
import { PresentationEcommerce } from "../../views/PresentationEcommerce";
import ProductsEcommerce from '../../components/ProductsEcommerce';
import { ProductDetail } from '../../components/ProductDetail';

export const HomeEcommerce = () => {
  return (
    <>
      <MainLayout>
        <PresentationEcommerce />
        <ProductsEcommerce/>
        <ProductDetail/>
      </MainLayout>
    </>
  );
};
