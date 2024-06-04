import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <img
          src="https://wemanity.com/img/menu/logo-wemanity-home-page.png"
          alt="le logo de wemanity"
        />
        <nav className={`topnav ${menuOpen ? "responsive" : ""}`}>
          <div>
            <Link to="/">Accueil</Link>
            <Link to="/history">Notre histoire</Link>
            <Link to="/services">Nos services</Link>
            <Link to="/team">Notre équipe</Link>
            <Link to="/career">Site carrière</Link>
          </div>
          <div>
            <button onClick={() => setIsOpen(true)}>Contact</button>
          </div>
        </nav>
        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </button>
      </header>
      <Modal
        centered
        maskClosable={false}
        open={isOpen}
        width="100%"
        footer={null}
        onCancel={() => setIsOpen(false)}
      >
        <iframe
          width="100%"
          height="850"
          src="https://careers.wemanity.com/fr/contact/"
          title="Présentation de l'équipe lilloise par practice"
          loading="lazy"
        />
      </Modal>
    </>
  );
};

export default Header;
