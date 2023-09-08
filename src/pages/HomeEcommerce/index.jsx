import { MainLayout } from "../../layout";
import { PresentationEcommerce } from "../../views/PresentationEcommerce";
import ProductsEcommerce from '../../components/ProductsEcommerce';

export const HomeEcommerce = () => {
  return (
    <>
      <MainLayout>
        <PresentationEcommerce />
        <ProductsEcommerce/>
      </MainLayout>
    </>
  );
};
