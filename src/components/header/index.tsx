import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import "./header.css";

const Header = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const onCloseMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, setMenuOpen]);

  return (
    <>
      <header className="header">
        <img
          src="https://wemanity.com/img/menu/logo-wemanity-home-page.png"
          alt="le logo de wemanity"
        />
        <nav
          aria-label="Le menu de navigation"
          ref={menuRef}
          className={`topnav ${menuOpen ? "responsive" : ""}`}
        >
          <div>
            <Link
              to="/"
              onClick={onCloseMenu}
              aria-label="Aller à la page d'accueil"
            >
              Accueil
            </Link>
            <Link
              to="/history"
              onClick={onCloseMenu}
              aria-label="Aller à la page notre histoire"
            >
              Notre histoire
            </Link>
            <Link
              to="/services"
              onClick={onCloseMenu}
              aria-label="Aller à la page nos services"
            >
              Nos services
            </Link>
            <Link
              to="/team"
              onClick={onCloseMenu}
              aria-label="Aller à la page notre équipe"
            >
              Notre équipe
            </Link>
            <Link
              to="/career"
              onClick={onCloseMenu}
              aria-label="Aller à la page site carrière"
            >
              Site carrière
            </Link>
          </div>
          <div>
            <button
              aria-label="ouvrir la fenêtre contextuelle du contact"
              onClick={() => setIsOpen(true)}
            >
              Contact
            </button>
          </div>
        </nav>
        <button
          aria-label="ouvrir le menu d'en-tête"
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
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
