import React, { Component } from "react";
import { categories } from "./../data/categories";
import PizzaCategories from "../components/pizzaCategories";
import { Container } from "react-bootstrap";
import PizzaCashback from "../components/pizzaCashback";
import ProductPizza from "../components/productPizza";
import { products } from "./../data/products";
import PizzaCard from "../components/productPizza/PizzaCard";
import PizzaDeliveryContent from "../components/pizzaDeliveryContent";
import { ToastContainer, toast } from "react-toastify";
import { CARTPRODUCTS } from "../components/const";
import "../components/pizzaNavbar/PizzaNavbar.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import navPizza from "../assets/images/nav-pizza.svg";
import { Offcanvas } from "react-bootstrap";
import PizzaCartCard from "../components/pizzaCartCard";

export default class ProjectPizza extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartProducts: JSON.parse(localStorage.getItem(CARTPRODUCTS)) || [],
    };
  }
  render() {
    const handleCartClose = () => {
      this.setState({ show: false });
    };
    const handleCartShow = () => {
      this.setState({ show: true });
    };
    const changeCartProduct = (cart) => {
      this.setState({
        cartProducts: cart,
      });
      localStorage.setItem("CARTPRODUCTS", JSON.stringify(cart));
    };
    let newProduct = categories.map((el) =>
      products.filter((p) => p.category === el.name)
    );
    const getProduct = (id) => {
      let newCartProducts;
      let productInCart = this.state.cartProducts.find(
        (item) => item.id === id
      );
      if (productInCart) {
        toast.success("This product has been compared again");
        newCartProducts = this.state.cartProducts.map((product) => {
          if (product.id === id) {
            product.quantity++;
          }
          return product;
        });
      } else {
        let findProduct = products.find((item) => item.id === id);
        findProduct.quantity = 1;
        newCartProducts = [...this.state.cartProducts, findProduct];
        toast.success(`Product ${id} is added to the cart`);
      }
      changeCartProduct(newCartProducts);
    };

    const changeCart = (type, id) => {
      let newCartProducts;
      if (type === "-") {
        let findProduct = products.find((item) => item.id === id);
        if (findProduct.quantity === 1) {
          newCartProducts = this.state.cartProducts.filter(
            (product) => product.id !== id
          );
        } else {
          newCartProducts = this.state.cartProducts.map((product) => {
            if (product.id === id) {
              product.quantity--;
            }
            return product;
          });
        }
        changeCartProduct(newCartProducts);
      } else if (type === "+") {
        newCartProducts = this.state.cartProducts.map((pr) => {
          if (pr.id === id) {
            pr.quantity++;
          }
          return pr;
        });
        changeCartProduct(newCartProducts);
      }
    };
    return (
      <>
        <ToastContainer autoClose={1000} />
        <nav>
          <Navbar expand="xl" left>
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Nav.Item className="d-md-flex d-block">
                    <Nav.Item className=" d-flex gap-0 align-items-center justify-content-center">
                      <Nav.Link>
                        <HiOutlineLocationMarker className="location" />
                      </Nav.Link>
                      <NavDropdown title="Москва" id="basic-nav-dropdown">
                        <NavDropdown.Item
                          className="border-bottom pb-2 mb-2"
                          href="#action/3.1"
                        >
                          Филиалы:
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Улица Арбат
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Улица Киевская
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav.Item>
                    <Nav.Link className="text-center address" href="#home">
                      Проверить адрес
                    </Nav.Link>
                    <Nav.Item className="gap-1 delivery d-flex align-items-center">
                      Среднее время доставки*: <span>00:24:19</span>
                    </Nav.Item>
                  </Nav.Item>
                  <Nav.Item className="work d-flex align-items-center">
                    Время работы: с 11:00 до 23:00
                    <Nav.Link href="#link">
                      {<FaUser className="user" />} Войти в аккаунт
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="nav-bottom border-bottom">
            <Container className="py-2  d-flex justify-content-between align-items-center">
              <div className="nav_bottom-logo d-flex align-items-center gap-2">
                <img src={navPizza} alt={navPizza} />
                <p className="m-0">Куда пицца</p>
              </div>
              <button
                onClick={handleCartShow}
                className="nav_bottom-allPrice d-flex align-items-center gap-2"
              >
                <FaShoppingCart className="nav_bottom-cart" />
                <span>
                  {this.state.cartProducts.reduce((acc, el) => {
                    return acc + el.price * el.quantity;
                  }, 0)}{" "}
                  <span>₽</span>
                </span>
              </button>
            </Container>
          </div>
          <Offcanvas
            placement="end"
            show={this.state.show}
            onHide={handleCartClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {this.state.cartProducts.map((item) => (
                <PizzaCartCard
                  key={item.id}
                  {...item}
                  changeCart={changeCart}
                />
              ))}
            </Offcanvas.Body>
          </Offcanvas>
        </nav>
        <Container>
          <div className="categories-items">
            {categories.map((el) => (
              <PizzaCategories key={el.name} {...el} />
            ))}
          </div>
        </Container>
        <Container>
          <PizzaCashback />
        </Container>
        <ProductPizza />
        <Container>
          <div className="pizza-items">
            {newProduct[0].map((el) => (
              <PizzaCard key={el.id} {...el} getProduct={getProduct} />
            ))}
          </div>
        </Container>
        <div className="container">
          <div className="pizza-head">
            <h2>Суши</h2>
          </div>
        </div>
        <Container>
          <div className="pizza-items">
            {newProduct[1].map((el) => (
              <PizzaCard key={el.id} {...el} getProduct={getProduct} />
            ))}
          </div>
        </Container>
        <div className="container">
          <div className="pizza-head">
            <h2>Закуски</h2>
          </div>
        </div>
        <Container>
          <div className="pizza-items">
            {newProduct[3].map((el) => (
              <PizzaCard key={el.id} {...el} getProduct={getProduct} />
            ))}
          </div>
        </Container>
        <div className="container">
          <div className="pizza-head">
            <h2>Десерты</h2>
          </div>
        </div>
        <Container>
          <div className="pizza-items">
            {newProduct[5].map((el) => (
              <PizzaCard key={el.id} {...el} getProduct={getProduct} />
            ))}
          </div>
        </Container>
        <div className="container">
          <div className="pizza-head">
            <h2>Напитки</h2>
          </div>
        </div>
        <Container>
          <div className="pizza-items">
            {newProduct[2].map((el) => (
              <PizzaCard key={el.id} {...el} getProduct={getProduct} />
            ))}
          </div>
        </Container>
        <div className="container">
          <div className="pizza-head">
            <h2>Cоусы</h2>
          </div>
        </div>
        <Container>
          <div className="pizza-items">
            {newProduct[6].map((el) => (
              <PizzaCard key={el.id} {...el} getProduct={getProduct} />
            ))}
          </div>
        </Container>
        <div className="container">
          <div className="pizza-head">
            <h2>Комбо</h2>
          </div>
        </div>
        <Container>
          <div className="pizza-items">
            {newProduct[4].map((el) => (
              <PizzaCard key={el.id} {...el} getProduct={getProduct} />
            ))}
          </div>
        </Container>
        <Container>
          <PizzaDeliveryContent />
        </Container>
      </>
    );
  }
}
