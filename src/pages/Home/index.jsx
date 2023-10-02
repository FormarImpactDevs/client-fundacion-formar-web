import { Presentation } from "../../views/Presentation";
import { Novedades } from "../../views/Novedades";
import { MainLayout } from "../../layout";
import { Volunteer } from "../../views/Volunteer";
import { FormColaborator } from "../../views/Form";
import { Done } from "../../views/Done";
import { QuienesSomos } from "../../components/QuienesSomos";
import { Programando } from "../../components/Programando";
import { Egresados } from "../../components/Egresados";
import { AliadosProg } from "../../components/AliadosProg";
import { Emprendiendo } from "../../components/Emprendiendo";
import { Equipo } from "../../components/Team";
import { Ejes } from "../../components/Axes";
import { EquipoEmprendiendo } from "../../components/TeamUndertaking";
import { Contacto } from "../../components/Contacto";
import { Aliados } from "../../components/Aliados";
import { ProgrammingTheInclusion } from "../../views/ProgrammingTheInclusion.jsx";
import { EquipoProgramando } from "../../components/TeamProgramming";

import useIntersection from "../../hooks/useIntersection";
import useObserverComponent from "../../hooks/useObserverComponent";

export default function Home() {
  const {
    setAboutIsIntersecting,
    setProgramingIsIntersecting,
    setVolunteerIsIntersecting,
    setUndertakingIsIntersecting,
    setContactIsIntersecting,
  } = useObserverComponent();

  const [aboutRefIsIntersecting, aboutRef] = useIntersection({
    threshold: 0.3,
  });
  const [programingRefIsIntersecting, programingRef] = useIntersection({
    threshold: 0.3,
  });
  const [volunteerRefIsIntersecting, volunteerRef] = useIntersection({
    threshold: 0.3,
  });
  const [undertakingRefIsIntersecting, undertakingRef] = useIntersection({
    threshold: 0.3,
  });
  const [contactRefIsIntersecting, contactRef] = useIntersection({
    threshold: 0.3,
  });

  return (
    <>
      <MainLayout>
        {/* Presentación */}
        <Presentation />

        {/* Quienes somos */}
        <div id="about" ref={aboutRef}>
          {aboutRefIsIntersecting
            ? setAboutIsIntersecting(true)
            : setAboutIsIntersecting(false)}
          <QuienesSomos />
        </div>

        {/* Ejes de trabajo */}
        <Ejes />
        {/* Equipo */}
        <Equipo />
        {/* Programando */}
        <div id="programing" ref={programingRef}>
          {programingRefIsIntersecting
            ? setProgramingIsIntersecting(true)
            : setProgramingIsIntersecting(false)}
          <Programando />
        </div>

        {/* Programando la inclución 2 */}
        <ProgrammingTheInclusion />
        {/* Conoce a los egresados */}
        <Egresados />
        {/* Hacen posible este programa "Aliados" */}
        <AliadosProg />
        {/* Equipo de programando */}
        <EquipoProgramando />

        {/* Voluntariado */}
        <div id="volunteer" ref={volunteerRef}>
          {volunteerRefIsIntersecting
            ? setVolunteerIsIntersecting(true)
            : setVolunteerIsIntersecting(false)}
          <Volunteer />
        </div>
        {/* Doná */}
        <Done />
        {/* Emprendiendo la inclusión */}
        <div id="undertaking" ref={undertakingRef}>
          {undertakingRefIsIntersecting
            ? setUndertakingIsIntersecting(true)
            : setUndertakingIsIntersecting(false)}
          <Emprendiendo />
        </div>
        {/* Aliados */}
        <Aliados />
        <EquipoEmprendiendo />
        {/* Novedades */}
        <Novedades />
        {/* Formulario voluntariado y dona */}
        <FormColaborator />
        {/* Contacto */}
        <div id="contact" ref={contactRef}>
          {contactRefIsIntersecting
            ? setContactIsIntersecting(true)
            : setContactIsIntersecting(false)}
          <Contacto />
        </div>
      </MainLayout>
    </>
  );
}
