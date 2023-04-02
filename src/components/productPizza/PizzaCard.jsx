import React, { Component } from "react";
import "./ProductPizza.scss";
import "../offCanvas/OffCanvas.scss";

export default class PizzaCard extends Component {
  render() {
    let { id, filter, image, name, description, price, getProduct } =
      this.props;
    return (
      <>
        <div className="pizza-item">
          <div className="pizza_item-img">
            <img src={image} alt="" />
          </div>
          <div className="pizza_item-content">
            <h4>{name}</h4>
            <p>{description}</p>
            <div className="pizza_item-bottom">
              <button onClick={() => getProduct(id)}>Выбрать</button>
              <span>от {price} ₽</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
