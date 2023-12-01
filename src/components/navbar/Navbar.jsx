import React, { useState } from "react";
import "./Navbar.css"; // Asegúrate de tener este archivo CSS para los estilos

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = document.querySelector(".top-nav").offsetHeight;
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: "smooth",
      });

      // Cerrar el menú después de hacer clic en un enlace
      setMenuOpen(false);
    }
  };

  const handleMenuToggle = () => {
    // Invertir el estado del menú (abrir/cerrar)
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <section className="top-nav">
      <h1 className="Title-page" onClick={() => handleLinkClick("inicio")}>
        Butacas Equitanti
      </h1>
      <input
        id="menu-toggle"
        type="checkbox"
        checked={isMenuOpen}
        onChange={handleMenuToggle}
      />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <li onClick={() => handleLinkClick("inicio")}>Inicio</li>
        <li onClick={() => handleLinkClick("descripcion")}>Descripcion</li>
        {/* <li onClick={() => handleLinkClick("contacto")}>
          Contacto
        </li> */}
        <li onClick={() => handleLinkClick("trabajos-anteriores")}>
          Trabajos anteriores
        </li>
        <li onClick={() => handleLinkClick("caracteristicas")}>
          Caracteristicas
        </li>
        <li onClick={() => handleLinkClick("sobre-nosotros")}>
          Sobre nosotros
        </li>
        <li onClick={() => handleLinkClick("experiencia")}>
          Nuestra experiencia
        </li>
        <li onClick={() => handleLinkClick("nuestros-clientes")}>
          Nuestros clientes
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
