import React, { Component } from "react";
import "./Company.scss";
import companyImg from "../../assets/images/company-img.png";

export class Company extends Component {
  render() {
    return (
      <section id="company">
        <div className="container">
          <div className="company-head">
            <h2>
              О компании <span>LEANGROUP</span>
            </h2>
          </div>
          <div className="company">
            <div className="company-left">
              <img className="company-img" src={companyImg} alt="" />
            </div>
            <div className="company-right">
              <p>
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб.
              </p>
              <p>
                Имея две технологии – для производства ламинатных и
                экструзионных туб, мы предлагаем вам широкий спектр
                возможностей. Большим преимуществом является собственный
                печатный цех в ламинате и in-line печать в экструзии с
                возможностью различных дополнительных опций декора. Особое
                внимание уделяется работе с поставщиками для контроля и
                поддержания качества производимой нами продукции.
              </p>
              <p>
                С января 2018 года компания стала членом Европейской Ассоциации
                производителей туб (ETMA), что подтверждает сильную позицию
                бренда и на рынке Европы.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Company;
