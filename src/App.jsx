import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import { Caracteristicas } from "./components/caracteristicas/Caracteristicas";
import { About } from "./components/about/About";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div>
      <div className="banner-container">
        <Navbar />
        <img
          className="img-banner"
          src="../public/images/sillones-widescreen.jpg"
          alt="banner sillones"
        />
        <div className="overlay"></div>
        <h1>Desde 1942 en producción de butacas y sillones</h1>
      </div>

      <div>
        <div className="line-title">
          <hr />
          <h2>Nuestros Trabajos</h2>
          <hr />
        </div>
        <Carousel />
      </div>

      <div className="caracteristicas">
        <div className="line-title">
          <hr />
          <h2>Caracteristicas</h2>
          <hr />
        </div>
        <Caracteristicas/>
      </div>

      <div className="caracteristicas">
        <div className="line-title">
          <hr />
          <h2>Nosotros</h2>
          <hr />
        </div>
        <About/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
