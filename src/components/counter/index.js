import React, { Component } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";

export default class Counter extends Component {
  // rconst
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      toogle: false,
    };
  }
  render() {
    const handleIncrease = () => {
      this.setState({ counter: this.state.counter + 1 });
    };
    const handleDecrease = () => {
      this.setState({
        counter:
          this.state.counter === 0
            ? this.state.counter
            : this.state.counter - 1,
      });
    };
    const toogle = () => {
      this.setState({ toogle: !this.state.toogle });
    };

    return (
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <h1 className="text-center">{this.state.counter}</h1>
            <div className="d-flex justify-content-between">
              <Button variant="danger" onClick={handleDecrease}>
                -
              </Button>
              <Button variant="success" onClick={handleIncrease}>
                +
              </Button>
            </div>
          </Col>
        </Row>
        <button onClick={toogle}>Toogle</button>
        <div className={`dropdown ${this.state.toogle ? "" : "d-none"}`}>
          <ul>
            <li>
              <a href="#">lorem1</a>
            </li>
            <li>
              <a href="#">lorem2</a>
            </li>
            <li>
              <a href="#">lorem3</a>
            </li>
            <li>
              <a href="#">lorem4</a>
            </li>
            <li>
              <a href="#">lorem5</a>
            </li>
          </ul>
        </div>
      </Container>
    );
  }
}
