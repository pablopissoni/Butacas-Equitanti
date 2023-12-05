import React from "react";
import "./descripcion.css";
import butacasHombre from "../../../public/images/hombre-pasar-tiempo-cine.jpg";

export const Descripcion = () => {
  return (
    <div className="descripcion-container">
      <div className="descripcion-div-img">
        <img src={butacasHombre} alt="hombre sentado en una butaca" />
      </div>

      <div className="descripcion-text">

        <div className="descripcion-text">
          <p>
          <strong>Somos más que una empresa; somos una tradición que perdura desde
            1942</strong>. En EQUITANTI, nos dedicamos con pasión a la producción,
            distribución y mantenimiento de equipamiento para cines y teatros.
            La calidad excepcional de nuestros materiales, nuestro compromiso
            con la experiencia del espectador y la confianza de nuestros
            clientes nos han llevado a ser líderes en constante crecimiento.
          </p>
          <p>
          <strong>EQUITANTI es una marca registrada en las salas más prestigiosas de
            la Argentina</strong>, un símbolo de calidad y un orgullo que trasciende
            generaciones. Con cuatro generaciones dedicadas a este oficio,
            combinamos la experiencia con la innovación. Contamos con la
            preferencia de muchas de las principales salas del país.
          </p>
          <p>
          <strong>Nos especializamos en la tapicería, colocación de butacas,
            movimientos de salas, servicios para cines, teatros, colegios y
            auditorios</strong>. Además, destacamos en el mantenimiento y limpieza de
            butacas y alfombras, garantizando siempre un entorno impecable para
            disfrutar del arte y el entretenimiento.
          </p>
        </div>
      </div>
      
    </div>
  );
};
