import React from "react";
import "./Header.css"
import logoHeader from "../../images/cpso_logo_header.png";

function Header({loggedIn, handleLogout}) {
  return (
    <header className="header">
      <a href="https://hssc-exam.ru" className="header__link" target="_blank" rel="noreferrer">
        <img className="header__img" src={logoHeader} alt="Платформа ЦПСО"></img>
      </a>
      {loggedIn && <button className="header__logout" onClick={handleLogout}>Выйти</button>}
    </header>
  );
}

export default Header;
