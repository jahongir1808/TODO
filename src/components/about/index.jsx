import React, { Component } from "react";
import "./About.scss";
import { FaUserAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="about">
            <h2>
              Получить подробную <span>информацию</span>
            </h2>
            <p>
              Просто заполните форму, наш менеджер свяжется с вами в ближайшее
              время
            </p>
            <div className="inputs">
              <form>
                <div className="name">
                  <button className="icon">
                    <FaUserAlt className="name-icon" />
                  </button>
                  <input placeholder="Ваше имя" type="text" />
                </div>
                <div className="tel">
                  <button className="icon">
                    <BsTelephoneFill className="tel-icon" />
                  </button>
                  <input placeholder="+375 (29) 0000000" type="tel" />
                </div>
              </form>
              <textarea placeholder="Комментарий"></textarea>
            </div>
            <div className="about-btn">
              <button>Получить информацию</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
