import { Modal } from "antd";
import "./header.css";

import { useState } from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header">
        <img
          src={"https://wemanity.com/img/menu/logo-wemanity-home-page.png"}
          alt="le logo de wemanity"
        />
        <nav className="topnav">
          <Link to="/">Acceuil</Link>
          <Link to="/history">Notre histoire</Link>
          <Link to="/services">Nos services</Link>
          <Link to="/team">Notre équipe</Link>
          <Link to="/career">Site carrière </Link>
        </nav>
        <button onClick={() => setIsOpen(true)}>contact</button>
      </header>
      <Modal
        centered
        maskClosable={false}
        open={isOpen}
        width={"100%"}
        footer={null}
        onCancel={() => setIsOpen(false)}
      >
        <iframe
          width={"100%"}
          height={"850"}
          src="https://careers.wemanity.com/fr/contact/"
          title="Présentation de l'équipe lilloise par practice "
          loading="lazy"
        />
      </Modal>
    </>
  );
};

export default Headers;