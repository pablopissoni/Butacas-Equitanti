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
        <h3>Butacas para Auditorios, Cines y Teatros</h3>

        <div className="descripcion-text">
          <p>
            Las salas de nuestros Cines, Teatros y Auditorios necesitan{" "}
            <strong>
              butacas confortables, resistentes y que cumplan con los estándares
              acústicos y de seguridad
            </strong>{" "}
            para una mejor experiencia cultural.
          </p>
          <p>
            Desde 1985 Rassegna® está presente en los
            <strong> auditorios más destacados, </strong>ofreciendo una
            <strong> gran variedad de productos </strong>que dan respuesta a las
            <strong> necesidades acústicas, estéticas y espaciales</strong> de
            cada uno.
          </p>
          <p>
            Con más de <strong>35 años de experiencia</strong>, diseñamos y
            producimos todos nuestros productos íntegramente en{" "}
            <strong>Argentina</strong>. Contamos con la confianza de los{" "}
            <strong>estudios de arquitectura más reconocidos</strong> del país.
          </p>
        </div>
      </div>
      
    </div>
  );
};
