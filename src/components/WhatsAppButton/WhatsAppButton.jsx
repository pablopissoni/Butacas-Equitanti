import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Mensaje predefinido
    const mensaje = "Hola, estoy interesado en las butacas";

    // Lógica para abrir el enlace de WhatsApp con el mensaje predefinido
    const url =
      "https://wa.me/1234567890?text=" + encodeURIComponent(mensaje);

    // Abrir enlace en una nueva ventana
    window.open(url, "_blank");
  };

  return (
    <button className="whatsapp-button" onClick={handleWhatsAppClick}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/018/819/295/original/whatsapp-icon-transparent-free-png.png"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </button>
  );
};

export default WhatsAppButton;
