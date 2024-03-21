import { ButtonGoToBack } from "../../components/ButtonGoToBack";
import { MainLayout } from "../../layout";
import { FormPointCreate } from "../../pages/Admin/components/FormPoints/FormCreatePoint";


export const FormCreatePoint = () => {
  return (
    <>
      <MainLayout>
        <ButtonGoToBack/>
        <FormPointCreate/>
      </MainLayout>
    </>
  );
};
