import React from "react";
import "./Header.css"
import logoHeader from "../../images/cpso_logo_header.png";

function Header() {
  return (
    <header className="header">
      <a href="https://hssc-exam.ru" className="header__link" target="_blank" rel="noreferrer">
        <img className="header__img" src={logoHeader} alt="Платформа ЦПСО"></img>
      </a>
    </header>
  );
}

export default Header;
