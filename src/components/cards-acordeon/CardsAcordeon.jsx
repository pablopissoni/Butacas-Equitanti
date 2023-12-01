// import React from 'react'
import "./CardsAcordeon.css";
// import butacaCine from "../../../public/images/palomitas-maiz-3d-asiento.jpg";
import butacaCine from "../../../public/images/seat-istockphoto.jpg";


export const CardsAcordeon = () => {
  const imagesData = [
    {
      title: "descripcion del trabajo",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero illo ratione odio asperiores eum magni ab nam qui voluptatem officia!",
      src: butacaCine,
    },
    {
      title: "descripcion del trabajo",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero illo ratione odio asperiores eum magni ab nam qui voluptatem officia!",
      src: butacaCine,
    },
    {
      title: "descripcion del trabajo",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero illo ratione odio asperiores eum magni ab nam qui voluptatem officia!",
      src: butacaCine,
    },

    {
      title: "descripcion del trabajo",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero illo ratione odio asperiores eum magni ab nam qui voluptatem officia!",
      src: butacaCine,
    },
    {
      title: "descripcion del trabajo",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero illo ratione odio asperiores eum magni ab nam qui voluptatem officia!",
      src: butacaCine,
    },
    {
      title: "descripcion del trabajo",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero illo ratione odio asperiores eum magni ab nam qui voluptatem officia!",
      src: butacaCine,
    },
  ];

  return (
    <div className="card-acordeon-container">
      {imagesData.map(({ title, descripcion, src }, index) => {
        return (
          <details className="card-acordeon__details" key={index}>
            <summary className="card-acordeon__img-summary">
              <img src={src} alt="image repet" />
              <img src={src} alt="image repet" />
              <img src={src} alt="image repet" />
            </summary>

            <div className="card-acordeon-container-text">
              <span className="title-card">{title}</span>
              <p className="card-acordeon__description-text--hidden-paragraph">
                {descripcion}
              </p>
            </div>
          </details>
        );
      })}
    </div>
  );
};
