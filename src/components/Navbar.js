import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-small.jpg';

const Navbar = () => {
    return (
        <header className="main-header">
        <nav className="nav main-nav"><Link to="/">
            <img src={logo} alt="NBT Estetyka" className='logo'/>
        </Link>
            <div className="nav-center">
                <ul className="nav-links">
                    <li>
                        <Link to="/about">O mnie</Link>
                    </li>
                    <li>
                        <Link to="/services">Usługi</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Galeria</Link>
                    </li>
                    <li>
                        <Link to="/pricing">Cennik</Link>
                    </li>
                    <li>
                        <Link to="/contact">Kontakt</Link>
                    </li>
                </ul>
            </div>
        </nav>
        
        </header>
    );
    }

export default Navbar;