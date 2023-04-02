import React, { Component } from "react";
import "./PizzaCartCard.scss";

export default class PizzaCartCard extends Component {
  render() {
    let { id, filter, image, name, description, price, quantity, changeCart } =
      this.props;

    return (
      <div className="container">
        <div className="cart-cards">
          <div className="cart-card">
            <div className="cart_card-img">
              <img src={image} alt="" />
            </div>
            <div className="cart_card-right">
              <div className="card_right-content">
                <h4>{name}</h4>
                <p>{description}</p>
              </div>
              <div className="card_right-bottom">
                <div className="card_bottom-btns">
                  <button onClick={() => changeCart("-", id)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => changeCart("+", id)}>+</button>
                </div>
                <div className="card_bottom-price">
                  <p>{price} ₽</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
