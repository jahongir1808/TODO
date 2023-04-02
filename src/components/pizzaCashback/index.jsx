import React, { Component } from "react";
import "./PizzaCashback.scss";

export default class PizzaCashback extends Component {
  render() {
    return (
      <>
        <div className="pizza_cashback-items">
          <div className="pizza_cashback-item">
            <p>3 средние пиццы от 999 рублей</p>
          </div>
          <div className="pizza_cashback-item">
            <p>Кэшбек 10% на самовывоз (доставка)</p>
          </div>
          <div className="pizza_cashback-item">
            <p>3 средние пиццы от 999 рублей</p>
          </div>
          <div className="pizza_cashback-item">
            <p>Кэшбек 10% на самовывоз (доставка)</p>
          </div>
        </div>
        <div className="delivery_address">
          <h4>Проверить адрес доставки</h4>
          <form>
            <input placeholder="Адрес" type="text" />
            <button type="submit">Проверить</button>
          </form>
        </div>
      </>
    );
  }
}
