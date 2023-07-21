import { Link } from "react-router-dom";
import logoFormar from "../../assets/logoFormar.png";
import "./header.scss";
import { useState } from "react";
import { BurguerButton } from "../BurguerButton";

export const Header = () => {

    const [isChecked, setIsChecked] = useState(false)
    const [isSelected, setIsSelected] = useState("")

    function toggleMenu(e) {
        setIsChecked(e.target.checked)   
        return isSelected     
    }

    function handleMenu(e) {
        setIsSelected(e.target.id)  

        setIsChecked(false)
    }

  return (
    <header className="topHeader">
      <nav className="topNav">
        {/* logo */}
        <Link to="/" className="logoHeader">
          <img src={logoFormar} alt="Logo de Fundación Formar" />
        </Link>
        <BurguerButton callback={toggleMenu} state={isChecked} />
       
        <ul className={isChecked ? "menu menu_opened" : "menu"} onClick={handleMenu}>
          <li className="paragraph2">
            <a href="#quienesSomos" id="aboutUs" className={isSelected === "aboutUs" ? "selected" : ""}>Quienes somos</a>
          </li>
          <li className="paragraph2">
            <a href="#" id="SchedulingInclusion" className={isSelected === "SchedulingInclusion" ? "selected" : ""}>Programando la inclusión</a>
          </li>
          <li className="paragraph2">
            <a href="#" id="UndertakingInclusion" className={isSelected === "UndertakingInclusion" ? "selected" : ""}>Emprendiendo la inclusión</a>
          </li>
          <li className="paragraph2">
            <a href="#" id="forIt" className={isSelected === "forIt" ? "selected" : ""}>FORIT</a>
          </li>
          <li className="paragraph2">
            <a href="#" id="Volunteering" className={isSelected === "Volunteering" ? "selected" : ""}>Voluntariado</a>
          </li>
          <li className="paragraph2">
            <a href="#" id="products" className={isSelected === "products" ? "selected" : ""}>Productos</a>
          </li>
          <li className="paragraph2">
            <a href="#" id="contact" className={isSelected === "contact" ? "selected" : ""}>Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
