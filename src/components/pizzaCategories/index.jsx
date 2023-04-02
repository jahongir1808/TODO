import React, { Component } from "react";
import "./PizzaCategories.scss";

export default class PizzaCategories extends Component {
  render() {
    let { name, image } = this.props;
    return (
      <div className="categories-item">
        <div className="categories_item-img">
          <img src={image} alt="" />
        </div>
        <h4>{name}</h4>
      </div>
    );
  }
}
