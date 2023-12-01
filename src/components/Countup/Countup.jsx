import React from "react";
import "./Countup.css";

//  >>> imagenes importadas <<<
import iconVideo from "../../../public/images/video.png";	
import iconSeat from "../../../public/images/seat.png";	
import iconSeats from "../../../public/images/seats.png";	
import iconBadge from "../../../public/images/badge.png";	

// import ImgClientes from "../../../public/images/clientes.jpg";
// import ImgManos from "../../../public/images/jovenes-trabajando.jpg";
import CountUp from "react-countup";

export const Countup = () => {
  const stats = [
    { id: "01", value: 160, description: "Salas de auditorios, cines y teatros realizados, en todo el país, en los últimos 6 años.", start: 163, suffix: "+" ,imgCount: iconVideo },
    { id: "02", value: 25000, description: "Más de 25.000 butacas producidas durante los últimos 6 años en nuestra fábrica.", start: 25000, suffix: "+", imgCount: iconSeat},
    { id: "02", value: 20, description: "Productos diferentes para auditorios: butacas, sillas, asientos individuales y en tándem.", start: 20, suffix: "+", imgCount: iconSeats},
    { id: "02", value: 30, description: "Desde 1942 asesorando proyectos de salas de auditorios, cines y teatros.", start: 35, suffix: "+", imgCount: iconBadge},
  ];

  return (
    <section className="countup-container">
      <div className="countup-overlay">
        <div className="countup-cards-container">
          {/* <h2 className="title-about">Nuestra Historia</h2> */}
          {/* <span className="descripcion">
            Somos más que una empresa; somos una tradición que perdura desde
            1942. En EQUITANTI, nos dedicamos con pasión a la producción,
            distribución y mantenimiento de equipamiento para cines y teatros.
            La calidad excepcional de nuestros materiales, nuestro compromiso
            con la experiencia del espectador y la confianza de nuestros
            clientes nos han llevado a ser líderes en constante crecimiento.
          </span> */}

          {stats.map(({ id, value, description, imgCount }) => (
            <div className="countup-cards" key={id}>
              <img src={imgCount} alt="imagenes de los countups" />
              <CountUp
                className="countup-card"
                start={0}
                end={value}
                duration={2.5}
                delay={0}
                separator=","
                suffix="+"
                enableScrollSpy={true}
              ></CountUp>

              <span className="countup-text">{description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

{
  /* <CountUp
  start={0}
  end={1000}
  duration={2.5}
  delay={0}
  separator=","
  suffix="+"
  enableScrollSpy={true}
/> */
}
