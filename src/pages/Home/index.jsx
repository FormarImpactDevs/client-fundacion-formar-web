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
import { Aliados } from "../../components/Aliados";
import { ProgrammingTheInclusion } from "../../views/ProgrammingTheInclusion.jsx";
import { EquipoProgramando } from "../../components/TeamProgramming";
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
        {/* Programando la inclución 2 */}
        <ProgrammingTheInclusion/>
        <Egresados />
        <AliadosProg/>
        <EquipoProgramando/>
        {/* Conoce a los egresados */}
        {/* Hacen posible este programa "Aliados" */}
        {/* Equipo de programando */}
        <Volunteer/>
        <Done/>
        <Emprendiendo/>
        <Aliados/>
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
