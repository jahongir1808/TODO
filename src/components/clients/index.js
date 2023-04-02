import React, { Component } from "react";
import "./Clients.css";
import clientsImg1 from "../../assets/images/clients-img1.png";
import clientsImg2 from "../../assets/images/clients-img2.png";
import clientsImg3 from "../../assets/images/clients-img3.png";
import clientsStar1 from "../../assets/images/clients-star.svg";
import clientsStar2 from "../../assets/images/clients-star2.svg";

export class Clients extends Component {
  render() {
    return (
      <section id="clients">
        <div class="container">
          <div class="clients">
            <div class="clients-content">
              <h2>What Clients Say</h2>
              <span>Problems trying to resolve the conflict between</span>
              <span>
                the two major realms of Classical physics: Newtonian mechanics{" "}
              </span>
            </div>
            <div class="clients-rows">
              <div class="clients-row">
                <div class="clients__row-star">
                  <img src={clientsStar1} alt="" />
                  <img src={clientsStar1} alt="" />
                  <img src={clientsStar1} alt="" />
                  <img src={clientsStar1} alt="" />
                  <img src={clientsStar2} alt="" />
                </div>
                <div class="clients__row-content">
                  <p>
                    Product helps you see how many more days you need to work to
                    reach your financial goal.
                  </p>
                </div>
                <div class="clients__row-about">
                  <img src={clientsImg1} alt="" />
                  <div class="clients__about-heading">
                    <h4>Wahid Ari</h4>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
              <div class="clients-row">
                <div class="clients__row-star">
                  <img src={clientsStar1} alt="" />
                  <img src={clientsStar1} alt="" />
                  <img src={clientsStar1} alt="" />
                  <img src={clientsStar1} alt="" />
                  <img src={clientsStar2} alt="" />
                </div>
                <div class="clients__row-content">
                  <p>
                    Product helps you see how many more days you need to work to
                    reach your financial goal.
                  </p>
                </div>
                <div class="clients__row-about">
                  <img src={clientsImg2} alt="" />
                  <div class="clients__about-heading">
                    <h4>Wahid Ari</h4>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
              <div class="clients-row">
                <div class="clients__row-star">
                  <img src={clientsStar1} alt="" />
                  <img src={clientsStar1} alt="" />
                  <img src={clientsStar1} alt="" />
                  <img src={clientsStar1} alt="" />
                  <img src={clientsStar2} alt="" />
                </div>
                <div class="clients__row-content">
                  <p>
                    Product helps you see how many more days you need to work to
                    reach your financial goal.
                  </p>
                </div>
                <div class="clients__row-about">
                  <img src={clientsImg3} alt="" />
                  <div class="clients__about-heading">
                    <h4>Wahid Ari</h4>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Clients;
