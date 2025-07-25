
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle"
import "./forms.scss"
import { ContactForm } from "../../components/Form";

export const FormColaborator = () => {
  return (
    <section className="container" id="formVolunteer">
        <div className="titlesFormsContainer">
            <Title text="Colaborá con Fundación Formar"/>
            <Subtitle text="Completá el formulario y te contactaremos para efectuar la donación"></Subtitle>
        </div>
      <ContactForm />
    </section>
  );
};
