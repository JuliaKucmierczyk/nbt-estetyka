import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-small.jpg';

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// create a function that checks if the hamburger is not null

hamburger.addEventListener("click", mobileMenu);


const Navbar = () => {
    return (
        <header className="main-header">
            <nav>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="NBT Estetyka"/>
                    </Link>
                </div>
                
                <ul className='nav-menu'>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">O mnie</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/services" className="nav-link">Usługi</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/training" className="nav-link">Szkolenia</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/gallery" className="nav-link">Galeria</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/pricing" className="nav-link">Cennik</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" className="contact-link nav-link">Kontakt</Link>
                        </li>
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav> 
    </header>
    )
}


export default Navbar;