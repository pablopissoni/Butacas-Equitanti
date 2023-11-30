// import React, { useState } from "react";
import "./Navbar.css"; // Asegúrate de tener este archivo CSS para los estilos

const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const handleLinkClick = () => {
//     setMenuOpen(false);
//   };

  return (
    <section className="top-nav">
    <div>
        Butacas Equitanti
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
      <li>Inicio</li>
      <li>Productos</li>
      <li>Contacto</li>
      {/* <li>Four</li> */}
      {/* <li>Five</li> */}
    </ul>
  </section>
  );
};

export default Navbar;
