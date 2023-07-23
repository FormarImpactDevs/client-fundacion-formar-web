import { Presentation } from "../../components/Presentation";
import { Novedades } from "../../components/Novedades";
import { MainLayout } from "../../layout";

export default function Home() {
  return (
    <>
      <MainLayout>
        {/* Presentación */}
        <Presentation/>  
        {/* Quienes somos */}

        <Novedades />
      </MainLayout>
    </>
  );
}
