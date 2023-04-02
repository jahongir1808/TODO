import React, { Component } from "react";
import "./ProductPizza.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FcEmptyFilter } from "react-icons/fc";

export default class ProductPizza extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }
  render() {
    const handleClose = () => {
      this.setState({ show: false });
    };
    const handleShow = () => {
      this.setState({ show: true });
    };

    return (
      <>
        <section id="pizza">
          <div className="container">
            <div className="pizza-head">
              <h2>Пицца</h2>
              <button onClick={handleShow}>
                <FcEmptyFilter className="pizza-filter" />
                Фильтры
              </button>
            </div>
          </div>
        </section>
        <Offcanvas placement="end" show={this.state.show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body></Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
}
