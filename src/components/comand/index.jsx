import React, { Component } from "react";
import "./Comand.scss";
import comandImg1 from "../../assets/images/comand-img1.png";
import comandImg2 from "../../assets/images/comand-img2.png";
import comandImg3 from "../../assets/images/comand-img3.png";
import comandImg4 from "../../assets/images/comand-img4.png";
import comandImg5 from "../../assets/images/comand-img5.png";

export default class Comand extends Component {
  render() {
    return (
      <section id="comand">
        <div className="container">
          <h2>
            Наша <span>команда</span>
          </h2>
          <div className="comand">
            <div className="comand-row">
              <img src={comandImg1} alt="" />
              <h3>Войнич Дарья</h3>
              <p>Заместитель директора по продажам</p>
              <a href="tel: +375 (17) 270-53-77 (317)">
                +375 (17) 270-53-77 (317)
              </a>
            </div>
            <div className="comand-row">
              <img src={comandImg2} alt="" />
              <h3>Мисько Екатерина</h3>
              <p>Начальник отдела сопровождения</p>
              <a href="tel: +375 (17) 270-53-77 (115)">
                +375 (17) 270-53-77 (115)
              </a>
              <a href="tel:  +375 29 112-73-48"> +375 29 112-73-48</a>
              <a href="mailto: k.melnichenko@leangroup.by">
                k.melnichenko@leangroup.by
              </a>
            </div>
            <div className="comand-row">
              <img src={comandImg3} alt="" />
              <h3>Дмитроченко Дмитрий</h3>
              <p>Начальник отдела допечатной подготовки</p>
              <a href="tel: +375 (17) 270-53-77 (333)">
                +375 (17) 270-53-77 (333)
              </a>
              <a href="tel:   +375 29 360-32-26"> +375 29 360-32-26</a>
              <a href="mailto: dmitrochenko@leangroup.by">
                dmitrochenko@leangroup.by
              </a>
            </div>
            <div className="comand-row">
              <img src={comandImg4} alt="" />
              <h3>Антух Евгений</h3>
              <p>Начальник отдела снабжения</p>
              <a href="tel: +375 (17) 270-53-77 (148)">
                +375 (17) 270-53-77 (148)
              </a>
              <a href="tel:   +375 44 764-16-28"> +375 44 764-16-28</a>
              <a href="mailto: j.antuh@leangroup.by">j.antuh@leangroup.by</a>
            </div>
            <div className="comand-row">
              <img src={comandImg5} alt="" />
              <h3>Мисник Елена</h3>
              <p>Специалист по работе с клиентами</p>
              <a href="tel: +375 (17) 270-53-77 (322)">
                +375 (17) 270-53-77 (322)
              </a>
              <a href="tel:   +375 29 329-34-03"> +375 29 329-34-03</a>
              <a href="mailto: e.misnik@leangroup.by">e.misnik@leangroup.by</a>
            </div>
          </div>
          <div className="comand-btn">
            <button>Наша команда</button>
          </div>
        </div>
      </section>
    );
  }
}
