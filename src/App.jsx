import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import { Caracteristicas } from "./components/caracteristicas/Caracteristicas";
import { About } from "./components/about/About";
import { Footer } from "./components/footer/Footer";
import { Descripcion } from "./components/descripcion/Descripcion";
import { Countup } from "./components/Countup/Countup";
import { CardsAcordeon } from "./components/cards-acordeon/CardsAcordeon";
import { Clientes } from "./components/clientes/Clientes";

function App() {
  return (
    <div>
      {/* >>> NavBar e imagen frontal <<<  */}
      <div className="banner-container">
        <Navbar />
        <img
          className="img-banner"
          src="../public/images/sillones-widescreen.jpg"
          alt="banner sillones"
        />
        <div className="overlay"></div>
        <h1 className="title-frontImg">Desde 1942 en producción de butacas y sillones</h1>
      </div>

      {/* >>> Carousel de imagenes <<<  */}
      <div>
        <div className="line-title">
          <hr />
          <h2 className="title-menu">Nuestros Trabajos</h2>
          <hr />
        </div>
        <Carousel />
      </div>

      {/* >>> Descripcion <<<  */}
      <div className="descripcion">
      <div className="line-title">
          <hr />
          <h2 className="title-menu">Descripcion</h2>
          <hr />
        </div>
        <Descripcion/>
      </div>

      {/* >>> Cards Acordeon <<<  */}
      <div className="cards-acordeon">
      <div className="line-title">
          <hr />
          <h2 className="title-menu">Trabajos anteriores</h2>
          <hr />
        </div>
        <CardsAcordeon/>
      </div>


      {/* >>> Caracteristicas <<<  */}
      <div className="caracteristicas">
        <div className="line-title">
          <hr />
          <h2 className="title-menu">Caracteristicas</h2>
          <hr />
        </div>
        <Caracteristicas/>
      </div>

      {/* >>> About <<<  */}
      <div className="about">
        <div className="line-title">
          <hr />
          <h2 className="title-menu">Sobre nosotros</h2>
          <hr />
        </div>
        <About/>
      </div>

      {/* >>> Contador <<<  */}
      <div className="countup">
        <div className="line-title">
          <hr />
          <h2 className="title-menu">Nuestra experiencia</h2>
          <hr />
        </div>
      <Countup/>
      </div>


      {/* >>> Clientes <<<  */}
      <div className="countup">
        <div className="line-title">
          <hr />
          <h2 className="title-menu">Nuestros clientes</h2>
          <hr />
        </div>
      <Clientes/>
      </div>


      {/* >>> Footer <<<  */}
      <Footer/>
    </div>
  );
}

export default App;
