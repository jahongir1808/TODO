import React, { Component } from "react";
import "./Strategies.css";
import strategiesImg from "../../assets/images/strategiesimg1.png";
import strategiesImg2 from "../../assets/images/strategiesimg2.png";
import strategiesImg3 from "../../assets/images/strategiesimg3.png";
import strategiesDot1 from "../../assets/images/dot.svg";
import strategiesDot2 from "../../assets/images/dot2.svg";

export default class Strategies extends Component {
  render() {
    return (
      <section id="strategies">
        <div class="container">
          <div class="strategies">
            <div class="strategies-content">
              <h3>Contents Strategies</h3>
              <p>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.{" "}
              </p>
            </div>
            <div class="strategies-rows">
              <div class="strategies-row">
                <img src={strategiesImg} alt="" />
                <div class="strategies__row-content">
                  <p>
                    By <span>Wahid Ari |</span> 03 March 2019
                  </p>
                  <h4>Increasing Prosperity With Positive Thinking</h4>
                </div>
              </div>
              <div class="strategies-row">
                <img src={strategiesImg2} alt="" />
                <div class="strategies__row-content">
                  <p>
                    By <span>Wahid Ari |</span> 03 March 2019
                  </p>
                  <h4>Motivation Is The First Step To Success</h4>
                </div>
              </div>
              <div class="strategies-row">
                <img src={strategiesImg3} alt="" />
                <div class="strategies__row-content">
                  <p>
                    By <span>Wahid Ari |</span> 03 March 2019
                  </p>
                  <h4 class="cont">
                    Success Steps For Your Personal Or Business
                  </h4>
                </div>
              </div>
            </div>
            <div class="strategies-dots">
              <img src={strategiesDot1} alt="" />
              <img src={strategiesDot2} alt="" />
              <img src={strategiesDot1} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
