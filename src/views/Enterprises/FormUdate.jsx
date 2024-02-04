import { ButtonGoToBack } from "../../components/ButtonGoToBack";
import { MainLayout } from "../../layout";
import { FormEnterpriseEdit } from "../../pages/Admin/components/FormsEnterprise/FormEnterpriseEdit";

export const FormUpdate = () => {
  return (
    <>
      <MainLayout>
        <ButtonGoToBack />
        <FormEnterpriseEdit />
      </MainLayout>
    </>
  );
};
