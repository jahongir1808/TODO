import React, { Component } from "react";
import "./Footer.scss";
import footerLogo from "../../assets/images/footer-logo.svg";
import footerIcon from "../../assets/images/footer-icon.svg";

export default class FooterTwo extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer-logo">
              <img src={footerLogo} alt="" />
              <img src={footerIcon} alt="" />
            </div>
            <div className="footer-bottom">
              <div className="footer-menus">
                <ul>
                  <h5>Продукция</h5>
                  <li>
                    <a href="#">Ламинатные тубы</a>
                  </li>
                  <li>
                    <a href="#">Экструзионные тубы</a>
                  </li>
                  <li>
                    <a href="#">Другая упаковка</a>
                  </li>
                </ul>
                <ul>
                  <h5>Компания</h5>
                  <li>
                    <a href="#">О нас</a>
                  </li>
                  <li>
                    <a href="#">Наша команда</a>
                  </li>
                  <li>
                    <a href="#">Сертификаты</a>
                  </li>
                </ul>
                <ul>
                  <h5>Разделы</h5>
                  <li>
                    <a href="#">Контакты</a>
                  </li>
                  <li>
                    <a href="#">Новости</a>
                  </li>
                  <li>
                    <a href="#">Вакансии</a>
                  </li>
                </ul>
              </div>
              <div className="footer_tel-numbers">
                <ul>
                  <h5>Беларусь</h5>
                  <li>
                    <a href="tel: +375 (17) 270 53 77">+375 (17) 270 53 77</a>
                  </li>
                  <li>
                    <a href="tel: +375 (17) 270 53 78">+375 (17) 270 53 78</a>
                  </li>
                </ul>
                <ul>
                  <h5>Европа</h5>
                  <li>
                    <a href="tel: +48 73 1111 044">+48 73 1111 044</a>
                  </li>
                </ul>
                <ul>
                  <h5>Москва</h5>
                  <li>
                    <a href="tel: +7 (495) 280 73 44">+7 (495) 280 73 44</a>
                  </li>
                  <li>
                    <a href="tel: +7 (495) 280 73 44">+7 (495) 280 73 44</a>
                  </li>
                </ul>
                <ul>
                  <h5>Екатеринбург</h5>
                  <li>
                    <a href="tel: +7 (343) 346 82 06">+7 (343) 346 82 06</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
