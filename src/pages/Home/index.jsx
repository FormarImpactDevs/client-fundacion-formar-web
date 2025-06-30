/* import { Presentation } from "../../views/Presentation";
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

import EnterpisesGallery from "../../views/EnterpisesGallery";*/
import { useEffect } from "react";
import { MainLayout } from "../../layout";
import { Presentation } from "../../views/Presentation";
import { Novedades } from "../../views/Novedades";
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
import { Contacto } from "../../components/Contacto";
import { Aliados } from "../../components/Aliados";
import { ProgrammingTheInclusion } from "../../views/ProgrammingTheInclusion.jsx";
import { EquipoProgramando } from "../../components/TeamProgramming";
import useIntersection from "../../hooks/useIntersection";
import useObserverComponent from "../../hooks/useObserverComponent";
import EnterpisesGallery from "../../views/EnterpisesGallery";

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

  useEffect(() => {
    setAboutIsIntersecting(aboutRefIsIntersecting);
  }, [aboutRefIsIntersecting, setAboutIsIntersecting]);

  useEffect(() => {
    setProgramingIsIntersecting(programingRefIsIntersecting);
  }, [programingRefIsIntersecting, setProgramingIsIntersecting]);

  useEffect(() => {
    setVolunteerIsIntersecting(volunteerRefIsIntersecting);
  }, [volunteerRefIsIntersecting, setVolunteerIsIntersecting]);

  useEffect(() => {
    setUndertakingIsIntersecting(undertakingRefIsIntersecting);
  }, [undertakingRefIsIntersecting, setUndertakingIsIntersecting]);

  useEffect(() => {
    setContactIsIntersecting(contactRefIsIntersecting);
  }, [contactRefIsIntersecting, setContactIsIntersecting]);

  return (
    <MainLayout>
      {/* Presentación */}
      <Presentation />

      {/* Quienes somos */}
      <div id="about" ref={aboutRef}>
        <QuienesSomos />
      </div>

      {/* Ejes de trabajo */}
      <Ejes />

      {/* Equipo */}
      <Equipo />

      {/* Programando */}
      <div id="programing" ref={programingRef}>
        <Programando />
      </div>

      {/* Programando la inclusión */}
      <ProgrammingTheInclusion />

      {/* Conoce a los egresados */}
      <Egresados />

      {/* Hacen posible este programa "Aliados" */}
      <AliadosProg />

      {/* Equipo de programando */}
      <EquipoProgramando />

      {/* Voluntariado */}
      <div id="volunteer" ref={volunteerRef}>
        <Volunteer />
      </div>

      {/* Doná */}
      <Done />

      {/* Emprendiendo la inclusión */}
      <div id="undertaking" ref={undertakingRef}>
        <Emprendiendo />
        <div id="enterprises">
          <EnterpisesGallery />
        </div>
      </div>

      {/* Aliados */}
      <Aliados />

      {/* Novedades  en reparación*/}
      {/*   <Novedades /> */}

      {/* Formulario voluntariado y dona */}
      <FormColaborator />

      {/* Contacto */}
      <div id="contact" ref={contactRef}>
        <Contacto />
      </div>
    </MainLayout>
  );
}
