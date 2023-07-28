import { Presentation } from "../../components/Presentation";
import { Novedades } from "../../components/Novedades";
import { MainLayout } from "../../layout";
import { QuienesSomos } from "../../components/QuienesSomos";
import { Programando } from "../../components/Programando";
import { Emprendiendo } from "../../components/Emprendiendo";
import { Equipo } from "../../components/Team";
import { EquipoEmprendiendo } from "../../components/TeamUndertaking";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Presentation />
        <QuienesSomos />
        <Equipo/>
        <Programando />
        <Emprendiendo/>
        <EquipoEmprendiendo/>
        <Novedades />
      </MainLayout>
    </>
  );
}
