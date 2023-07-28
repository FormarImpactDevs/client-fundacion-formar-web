import { Presentation } from "../../components/Presentation";
import { Novedades } from "../../components/Novedades";
import { MainLayout } from "../../layout";
import { QuienesSomos } from "../../components/QuienesSomos";
import { Programando } from "../../components/Programando";
import { Emprendiendo } from "../../components/Emprendiendo";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Presentation />
        <QuienesSomos />
        <Programando />
        <Emprendiendo/>
        <Novedades />
      </MainLayout>
    </>
  );
}
