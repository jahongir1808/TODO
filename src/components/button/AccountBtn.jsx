import React, { Component } from "react";
import "./AccountBtn.scss";

export default class AccountBtn extends Component {
  render() {
    return <button>{this.props.children}</button>;
  }
}
