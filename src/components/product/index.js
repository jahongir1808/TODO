import React, { Component } from "react";
import "./Product.css";
import productImg from "../../assets/images/header-icon1.svg";
import productImg2 from "../../assets/images/header-icon2.svg";
import productImg3 from "../../assets/images/header-icon3.svg";
import productImg4 from "../../assets/images/header-icon4.svg";

export default class Strategies extends Component {
  render() {
    return (
      <section id="header-bottom">
        <div class="container">
          <div class="header-bottom">
            <div class="header__bottom-content">
              <h1>Product was Built Specifically for You</h1>
            </div>
            <div class="header__bottom-rows">
              <div class="header__bottom-row">
                <img src={productImg} alt="" />
                <h3>First click tests</h3>
                <p>While most people enjoy casino gambling,</p>
              </div>
              <div class="header__bottom-row">
                <img src={productImg2} alt="" />
                <h3>Design surveys</h3>
                <p>Sports betting, lottery and bingo playing for the fun</p>
              </div>
              <div class="header__bottom-row">
                <img src={productImg3} alt="" />
                <h3>Preference tests</h3>
                <p>The Myspace page defines the individual.</p>
              </div>
              <div class="header__bottom-row">
                <img src={productImg4} alt="" />
                <h3>Five second tests</h3>
                <p>
                  Personal choices and the overall personality of the person.
                </p>
              </div>
            </div>
            <div class="header__bottom-btn">
              <a href="#">SIGN UP NOW</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
