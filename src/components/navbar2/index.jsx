import React from "react";
import navLogo from "../../assets/images/nav-logo.svg";
import "./Navbar.scss";

const index = () => {
  return (
    <header>
      <nav id="navbar">
        <div className="container">
          <div className="nav-container">
            <div className="nav-logo">
              <img src={navLogo} alt={navLogo} />
            </div>
            <ul className="nav-menus">
              <li>
                <a href="#">Продукция</a>
              </li>
              <li>
                <a href="#">Сертификаты</a>
              </li>
              <li>
                <a href="#">Наша команда</a>
              </li>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Новости</a>
              </li>
              <li>
                <a href="#">Вакансии</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
            <div className="nav-btns">
              <button>RU</button>
              <span></span>
              <button>EN</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default index;
