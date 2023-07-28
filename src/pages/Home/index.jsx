import { Presentation } from "../../components/Presentation";
import { Novedades } from "../../components/Novedades";
import { MainLayout } from "../../layout";
import { Volunteer } from "../../views/Volunteer";
import { FormColaborator } from "../../views/Form";
import { Done } from "../../views/Done";

export default function Home() {
  return (
    <>
      <MainLayout>
        {/* Presentación */}
        <Presentation/>  
        {/* Quienes somos */}

        <Volunteer/>
        <Done/>
        <Novedades />
        <FormColaborator/>
      </MainLayout>
    </>
  );
}
