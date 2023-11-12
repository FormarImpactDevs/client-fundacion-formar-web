import { ButtonGoToBack } from "../../components/ButtonGoToBack";
import { MainLayout } from "../../layout";
import { FormOrderUpdate } from "../../pages/Admin/components/FormOrder/FormOrderUpdate";

export const FormUpdateOrder = () => {
  return (
    <>
      <MainLayout>
        <ButtonGoToBack />
        <FormOrderUpdate />
      </MainLayout>
    </>
  );
};
