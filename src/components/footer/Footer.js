import React from "react";
import "./Footer.css";

const Footer = () => {
  const msg = "Olá! Gostaria de obter mais informações.";

  return (
    <div className="footer">
      <div className="footer-local">
        <a
          href="https://maps.app.goo.gl/mBePsZebnHUJJobRA"
          target="_blank"
          rel="noreferrer"
          className="footer-buttons"
        >
          <i className="ri-map-pin-line"></i>
          <h3>Itajaí - SC</h3>
        </a>
      </div>
      <div className="footer-contact">
        <a
          href={`mailto:contato@jmcarpintaria.com.br?subject=Contato pelo site&body=${encodeURIComponent(
            msg
          )}`}
          target="_blank"
          rel="noreferrer"
          className="footer-buttons"
        >
          <i className="ri-mail-line"></i>
        </a>
        <a
          href="https://www.facebook.com/JmCarpintaria"
          target="_blank"
          rel="noreferrer"
          className="footer-buttons"
        >
          <i className="ri-facebook-box-line"></i>
        </a>
        <a
          href="https://www.instagram.com/jmcarpintaria"
          target="_blank"
          rel="noreferrer"
          className="footer-buttons"
        >
          <i className="ri-instagram-line"></i>
        </a>
        <a
          href={`https://wa.me/5547992403449?text=${encodeURIComponent(msg)}`}
          target="_blank"
          rel="noreferrer"
          className="footer-buttons"
        >
          <i className="ri-whatsapp-line"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
