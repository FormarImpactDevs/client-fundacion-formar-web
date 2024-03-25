import { ButtonGoToBack } from "../../components/ButtonGoToBack";
import { MainLayout } from "../../layout";
import { FormEditPoint } from "../../pages/Admin/components/FormPoints/FormEditPoint";

export const FormUpdatePoint = () => {
  return (
    <>
      <MainLayout>
        <ButtonGoToBack />
        <FormEditPoint/>
      </MainLayout>
    </>
  );
};
