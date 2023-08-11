import { Form } from "../../components/Form";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle"
import "./forms.scss"

export const FormColaborator = () => {
  return (
    <section className="container">
        <div className="titlesFormsContainer">
            <Title text="Colabora con Fundacion formar"/>
            <Subtitle text="Completa el formulario y te contactaremos para efectuar la donación"></Subtitle>
        </div>
      <Form />
    </section>
  );
};
