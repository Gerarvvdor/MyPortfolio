import React, { useState } from 'react';
import '../Style/NavBar.css';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-title">GAOV</h1>
            <div className="navbar-toggle" onClick={toggleMobileMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className={`navbar-list ${isMobile ? 'active' : ''}`}>
                <li className="navbar-item">
                    <a href="#home">Inicio</a>
                </li>
                <li className="navbar-item">
                    <a href="#projects">Proyectos</a>
                </li>
                <li className="navbar-item">
                    <a href="#contact">Contacto</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;