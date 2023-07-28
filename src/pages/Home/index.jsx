import { Presentation } from "../../components/Presentation";
import { Novedades } from "../../components/Novedades";
import { MainLayout } from "../../layout";
import { Volunteer } from "../../views/Volunteer";
import { FormColaborator } from "../../views/Form";

export default function Home() {
  return (
    <>
      <MainLayout>
        {/* Presentación */}
        <Presentation/>  
        {/* Quienes somos */}

        <Volunteer/>
        <Novedades />
        <FormColaborator/>
      </MainLayout>
    </>
  );
}
