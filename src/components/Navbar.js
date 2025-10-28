import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-small.jpg";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="main-header">
      <nav>
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="NBT Estetyka" />
          </Link>
        </div>
        <ul className={!isOpen ? "nav-menu" : "nav-menu-toggled"}>
          <li className="nav-item">
            <Link to="/omnie" className="nav-link" onClick={closeMenu}>
              O mnie
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/uslugi" className="nav-link" onClick={closeMenu}>
              Usługi
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/treningi" className="nav-link" onClick={closeMenu}>
              Szkolenia
            </Link>
          </li>
          {/* <li class="nav-item">
            <Link to="/gallery" className="nav-link" onClick={closeMenu}>
              Galeria
            </Link>
          </li> */}
          <li class="nav-item">
            <Link to="/cennik" className="nav-link" onClick={closeMenu}>
              Cennik
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/kontakt"
              className="contact-link nav-link"
              onClick={closeMenu}
            >
              Kontakt
            </Link>
          </li>
        </ul>
        <div className="hamburger-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
