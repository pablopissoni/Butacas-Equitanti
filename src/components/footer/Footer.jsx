import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Butacas <span>Equitanti</span>
        </h3>

        {/* <p className="footer-links">
					<a href="#" className="link-1"
					onClick={() => handleLinkClick("trabajos-anteriores")}
					>Inicio</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p> */}

        {/* <p className="footer-company-name">Company Name © 2015</p> */}
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>444 S. Cedros Ave</span> Solana Beach, California
          </p>
        </div>

        {/* <div>
					<i className="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div> */}

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">
              butacasequitanti@hotmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>Nuestra compania</span>
          EQUITANTI, desde 1942, líder en equipamiento para cines y teatros.
          Tradición, calidad, innovación. Preferidos por las principales salas
          del país.
        </p>

        {/* <div className="footer-icons">

					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>

				</div> */}
      </div>

      <p className="copyright">
        Butacas Equitanti &copy Todos los derechos reservados - 2024
      </p>
    </footer>
  );
};
