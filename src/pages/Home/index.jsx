import { Presentation } from "../../components/Presentation";
import { Novedades } from "../../components/Novedades";
import { MainLayout } from "../../layout";
import { QuienesSomos } from "../../components/QuienesSomos";
import { Programando } from "../../components/Programando";
import { Egresados } from "../../components/Egresados";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Presentation />
        <QuienesSomos />
        <Programando />
        <Egresados />
        <Novedades />
      </MainLayout>
    </>
  );
}
