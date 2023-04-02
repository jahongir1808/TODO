import React, { Component } from "react";
import "./Price.css";
export class Price extends Component {
  render() {
    return (
      <section id="price">
        <div class="container">
          <div class="price">
            <div class="price-content">
              <h2>Price Table</h2>
              <p>We offer competitive price</p>
            </div>
            <div class="price-rows">
              <div class="price-row">
                <h4>Free</h4>
                <p>Brief price description</p>
                <div class="price__row-numbers">
                  <h1>0</h1>
                  <div class="price__row-number">
                    <h3>$</h3>
                    <p>
                      per <span>/</span> month
                    </p>
                  </div>
                </div>
                <div class="price__row-operators">
                  <p>Only 2 Operators</p>
                  <p>Notifications</p>
                  <p>Landing Pages</p>
                </div>
                <a href="#">Order Now</a>
              </div>
              <div class="price-row">
                <h4>Standard</h4>
                <p>Brief price description</p>
                <div class="price__row-numbers">
                  <h1>5</h1>
                  <div class="price__row-number">
                    <h3>$</h3>
                    <p>
                      per <span>/</span> month
                    </p>
                  </div>
                </div>
                <div class="price__row-operators">
                  <p>5+ Operators</p>
                  <p>Notifications</p>
                  <p>Landing Pages</p>
                </div>
                <a href="#">Order Now</a>
              </div>
              <div class="price-row">
                <h4>Premium</h4>
                <p>Brief price description</p>
                <div class="price__row-numbers">
                  <h1>10</h1>
                  <div class="price__row-number">
                    <h3>$</h3>
                    <p>
                      per <span>/</span> month
                    </p>
                  </div>
                </div>
                <div class="price__row-operators">
                  <p>10+ Operators</p>
                  <p>Notifications</p>
                  <p>Landing Pages</p>
                </div>
                <a href="#">Order Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Price;
