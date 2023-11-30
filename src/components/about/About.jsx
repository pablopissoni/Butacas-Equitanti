import React from "react";
import "./About.css";

export const About = () => {
  return (
    <section className="nuestra-historia">
      <div className="overlay">
        <div className="container">
          {/* <h2 className="title-about">Nuestra Historia</h2> */}
          <p className="descripcion">
            Somos más que una empresa; somos una tradición que perdura desde
            1942. En EQUITANTI, nos dedicamos con pasión a la producción,
            distribución y mantenimiento de equipamiento para cines y teatros.
            La calidad excepcional de nuestros materiales, nuestro compromiso
            con la experiencia del espectador y la confianza de nuestros
            clientes nos han llevado a ser líderes en constante crecimiento.
          </p>
          <p className="marca-registrada">
            EQUITANTI es una marca registrada en las salas más prestigiosas de
            la Argentina, un símbolo de calidad y un orgullo que trasciende
            generaciones. Con cuatro generaciones dedicadas a este oficio,
            combinamos la experiencia con la innovación. Contamos con la
            preferencia de muchas de las principales salas del país.
          </p>
          <p className="servicios">
            Nos especializamos en la tapicería, colocación de butacas,
            movimientos de salas, servicios para cines, teatros, colegios y
            auditorios. Además, destacamos en el mantenimiento y limpieza de
            butacas y alfombras, garantizando siempre un entorno impecable para
            disfrutar del arte y el entretenimiento.
          </p>
        </div>
      </div>
    </section>
  );
};
