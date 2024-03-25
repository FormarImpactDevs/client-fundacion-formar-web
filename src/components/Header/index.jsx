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
import CartBadge from "../CartBadge";

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

  function toggleMenu(e) {
    setIsChecked(e.target.checked);
    return isSelected;
  }

  function handleMenu(e) {
    setIsSelected(e.target.id);

    setIsChecked(false);
  }
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
        <BurguerButton callback={toggleMenu} state={isChecked} />

        <ul
          className={isChecked ? "menu menu_opened" : "menu"}
          onClick={handleMenu}
        >
          <li className="paragraph2">
            <a
              href="/#about"
              id="AboutUs"
              className={aboutIsIntersecting ? "selected" : ""}
            >
              Quienes somos
            </a>
          </li>
          <li className="paragraph2">
            <a
              href="/#programing"
              id="SchedulingInclusion"
              className={programingIsIntersecting ? "selected" : ""}
            >
              Programando la inclusión
            </a>
          </li>
          <li className="paragraph2">
            <a
              href="/#undertaking"
              id="UndertakingInclusion"
              className={undertakingIsIntersecting ? "selected" : ""}
            >
              Emprendiendo la inclusión
            </a>
          </li>
          <li className="paragraph2">
            <a
              href="#"
              id="forIt"
              className={isSelected === "forIt" ? "selected" : ""}
            >
              FORIT
            </a>
          </li>
          <li className="paragraph2">
            <a
              href="/#volunteer"
              id="Volunteering"
              className={volunteerIsIntersecting ? "selected" : ""}
            >
              Voluntariado
            </a>
          </li>
          <li className="paragraph2">
            <Link
              to="/products"
              id="products"
              className={isSelected === "products" ? "selected" : ""}
            >
              Productos
            </Link>
          </li>
          <li className="paragraph2">
            <a
              href="/#contact"
              id="Contact"
              className={contactIsIntersecting ? "selected" : ""}
            >
              Contacto
            </a>
          </li>
          <li>
          {currentUser ? (
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                {currentUser.nombre}
              </Button>
            ) : null}
            {currentUser && (
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
            )}
          </li>
        </ul>
        <CartBadge/>
      </nav>
    </header>
  );
};