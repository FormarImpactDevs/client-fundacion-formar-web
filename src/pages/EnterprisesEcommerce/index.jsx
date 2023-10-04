import { MainLayout } from "../../layout";
import { PresentationEcommerce } from "../../views/PresentationEcommerce";
import EnterpriseEcommerce from '../../components/EnterprisesEcommerce';

export const EnterprisesEcommerce = () => {
    return (
      <>
        <MainLayout>
          <PresentationEcommerce />
          <EnterpriseEcommerce/>
        </MainLayout>
      </>
    );
  };