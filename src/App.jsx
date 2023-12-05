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
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <div>
      {/* >>> NavBar e imagen frontal <<<  */}
      <div className="banner-container" id="inicio">
        <Navbar />
        {/* <img
          className="img-banner"
          src="../public/images/sillones-widescreen.jpg"
          alt="banner sillones"
        />
        <div className="overlay"></div>
        <h1 className="title-frontImg">Desde 1942 en producción de butacas y sillones</h1> */}
      </div>

      {/* >>> Carousel de imagenes <<<  */}
      <div className="app-carousel-container">
        {/* <div className="line-title">
          <hr />
          <h2 className="title-menu">Nuestros Trabajos</h2>
          <hr />
        </div> */}
        <Carousel />
      </div>

      {/* >>> Descripcion <<<  */}
      <div className="descripcion" id="descripcion">
      <div className="line-title">
          <hr />
          <h2 className="title-menu">Sobre nosotros</h2>
          <hr />
        </div>
        <Descripcion/>
      </div>

      {/* >>> Cards Acordeon <<<  */}
      <div className="cards-acordeon" id="trabajos-anteriores">
      <div className="line-title">
          <hr />
          <h2 className="title-menu">Trabajos anteriores</h2>
          <hr />
        </div>
        <CardsAcordeon/>
      </div>


      {/* >>> Caracteristicas <<<  */}
      <div className="caracteristicas" id="caracteristicas">
        <div className="line-title">
          <hr />
          <h2 className="title-menu">Caracteristicas</h2>
          <hr />
        </div>
        <Caracteristicas/>
      </div>

      {/* >>> About <<<  */}
      {/* <div className="about" id="sobre-nosotros">
        <div className="line-title">
          <hr />
          <h2 className="title-menu">Sobre nosotros</h2>
          <hr />
        </div>
        <About/>
      </div> */}

      {/* >>> Contador <<<  */}
      <div className="countup" id="experiencia">
        <div className="line-title">
          <hr />
          <h2 className="title-menu">Nuestra experiencia</h2>
          <hr />
        </div>
      <Countup/>
      </div>


      {/* >>> Clientes <<<  */}
      <div className="countup" id="nuestros-clientes">
        <div className="line-title">
          <hr />
          <h2 className="title-menu">Nuestros clientes</h2>
          <hr />
        </div>
      <Clientes/>
      </div>

      <WhatsAppButton/>

      {/* >>> Footer <<<  */}
      <Footer/>
    </div>
  );
}

export default App;
