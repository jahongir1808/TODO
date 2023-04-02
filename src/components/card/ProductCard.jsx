import React, { Component } from "react";
import "./ProductCard.scss";

export default class ProductCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="product-card">
        <div className="product-body">
          <img src={this.props.image} alt={this.props.name} />
        </div>
        <div className="product-footer">
          <h3>{this.props.name}</h3>
          <p>{this.props.desc}</p>
        </div>
      </div>
    );
  }
}
