import { Form } from "../../components/Form";
import "./forms.scss"

export const FormColaborator = () => {
  return (
    <section className="container">
        <div className="titlesFormsContainer">
            <h1 className="titleDark">Colabora con Fundación Formar</h1>
            <p className="subtitle">Completa el formulario y te contactaremos para efectuar la donación</p>
        </div>
      <Form />
    </section>
  );
};
