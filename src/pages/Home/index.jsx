import { Presentation } from "../../components/Presentation";
import { Novedades } from "../../components/Novedades";
import { MainLayout } from "../../layout";
import { Volunteer } from "../../views/Volunteer";
import { FormColaborator } from "../../views/Form";
import { Done } from "../../views/Done";
import { QuienesSomos } from "../../components/QuienesSomos";
import { Programando } from "../../components/Programando";
import { Emprendiendo } from "../../components/Emprendiendo";
import { Equipo } from "../../components/Team";
import { Ejes } from "../../components/Axes";
import { EquipoEmprendiendo } from "../../components/TeamUndertaking";

export default function Home() {
  return (
    <>
      <MainLayout>
        {/* Presentación */}
        <Presentation/>  
        {/* Quienes somos */}
        <QuienesSomos />

        <Ejes/>

        <Equipo/>
        <Programando />
        {/* Conoce a los egresados */}
        {/* Hacen posible este programa "Aliados" */}
        {/* Equipo de programando */}
        <Volunteer/>
        <Done/>
        <Emprendiendo/>
        {/* Aliados */}
        <EquipoEmprendiendo/>
        
        <Novedades />
        <FormColaborator/>
        {/* Contacto */}
       
      </MainLayout>
    </>
  );
}
