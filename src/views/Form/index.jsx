import { Form } from "../../components/Form";
import Title from "../../components/Title";
import "./forms.scss"

export const FormColaborator = () => {
  return (
    <section className="container">
        <div className="titlesFormsContainer">
            <Title text="Colabora con Fundacion formar"/>
            <p className="subtitle">Completa el formulario y te contactaremos para efectuar la donación</p>
        </div>
      <Form />
    </section>
  );
};
