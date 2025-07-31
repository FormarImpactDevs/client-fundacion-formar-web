import { Link } from "react-router-dom";
import logoFormar from "../../assets/logoFormar.png";
import "./header.scss";
import { useState } from "react";
import { BurguerButton } from "../BurguerButton";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useObserverComponent from "../../hooks/useObserverComponent";
import { useAuth } from "../../context/AuthProvider";
//import CartBadge from "../CartBadge";

export const Header = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSelected, setIsSelected] = useState("");

  const {
    aboutIsIntersecting,
    programingIsIntersecting,
    volunteerIsIntersecting,
    undertakingIsIntersecting,
    contactIsIntersecting,
  } = useObserverComponent();

  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="topHeader">
      <nav className="topNav">
        {/* logo */}
        <Link to="/" className="logoHeader">
          <img src={logoFormar} alt="Logo de Fundación Formar" />
        </Link>
        <BurguerButton callback={(e) => setIsChecked(e.target.checked)} state={isChecked} />

        <ul
          className={isChecked ? "menu menu_opened" : "menu"}
          onClick={(e) => setIsSelected(e.target.id)}
        >
          <li className="paragraph2" key="about">
            <a
              href="/#about"
              id="AboutUs"
              className={aboutIsIntersecting ? "selected" : ""}
            >
              Quienes somos
            </a>
          </li>
          <li className="paragraph2" key="programing">
            <a
              href="/#programing"
              id="SchedulingInclusion"
              className={programingIsIntersecting ? "selected" : ""}
            >
              Programando la inclusión
            </a>
          </li>
          <li className="paragraph2" key="undertaking">
            <a
              href="/#undertaking"
              id="UndertakingInclusion"
              className={undertakingIsIntersecting ? "selected" : ""}
            >
              Emprendiendo la inclusión
            </a>
          </li>
          <li className="paragraph2" key="forIt">
            <a
              href="https://forit.ar/"
              id="forIt"
              className={isSelected === "forIt" ? "selected" : ""}
            >
              Software Factory FOR IT
            </a>
          </li>
          <li className="paragraph2" key="volunteer">
            <a
              href="/#volunteer"
              id="Volunteering"
              className={volunteerIsIntersecting ? "selected" : ""}
            >
              Voluntariado
            </a>
          </li>
          <li className="paragraph2" key="products">
            <Link
              to="https://linktr.ee/fundacionformarcatalogo"
            >
              Productos
            </Link>
          </li>
          <li className="paragraph2" key="contact">
            <a
              href="/#contact"
              id="Contact"
              className={contactIsIntersecting ? "selected" : ""}
            >
              Contacto
            </a>
          </li>
          <li key="userMenu">
            {currentUser ? (
              <>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  {currentUser.nombre}
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem>
                    <Link
                      to="/admin"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Dashboard Admin
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : null}
          </li>
        </ul>
        {/* Se oculta el badge del carrito por el momento */}
        {/* <CartBadge /> */}
      </nav>
    </header>
  );
};
