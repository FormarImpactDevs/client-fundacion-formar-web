import { ButtonGoToBack } from "../../components/ButtonGoToBack";
import { MainLayout } from "../../layout";
import { FormEnterpriseCreate } from "../../pages/Admin/components/FormsEnterprise/FormEnterpriseCreate";


export const FormCreate = () => {
  return (
    <>
      <MainLayout>
        <ButtonGoToBack/>
        <FormEnterpriseCreate />
      </MainLayout>
    </>
  );
};
