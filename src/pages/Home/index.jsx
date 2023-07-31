import { Presentation } from "../../views/Presentation";
import { Novedades } from "../../views/Novedades";
import { MainLayout } from "../../layout";
import { Volunteer } from "../../views/Volunteer";
import { FormColaborator } from "../../views/Form";
import { Done } from "../../views/Done";
import { QuienesSomos } from "../../components/QuienesSomos";
import { Programando } from "../../components/Programando";
import { Egresados } from "../../components/Egresados";
import { AliadosProg } from "../../components/AliadosProg"
import { Emprendiendo } from "../../components/Emprendiendo";
import { Equipo } from "../../components/Team";
import { Ejes } from "../../components/Axes";
import { EquipoEmprendiendo } from "../../components/TeamUndertaking";
import { Contacto } from "../../components/Contacto";
import { Footer } from "../../components/Footer";

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
        <Egresados />
        <AliadosProg/>
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
        <Contacto/>
        <Footer />
       
      </MainLayout>
    </>
  );
}
