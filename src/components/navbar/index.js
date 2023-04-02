// rafce
import React from "react";
import "./Navbar.css";
import "../../App.css";
import darkImg from "../../assets/images/dark.svg";
import closeIcon from "../../assets/images/close-icon.svg";
import openIcon from "../../assets/images/hb-menu.svg";

// function openNavbar() {
//   document.getElementById("navbar-responsive").style.left = "0";
//   // document.getElementById("navbar-responsive").style.top = "0";
// }
// function closeNavbar() {
//   document.getElementById("navbar-responsive").style.left = "-100%";
//   // document.getElementById("navbar-responsive").style.top = "-100%";
// }

const Navbar = () => {
  return (
    <header>
      <nav id="navbar">
        <div class="container">
          <div class="nav-container">
            <div class="nav-logo-img">
              <a href="index.html">
                <img src="images/navlogo.svg" alt="" />
              </a>
              <h2>Product</h2>
            </div>
            <div class="nav-menus">
              <ul>
                <li>
                  <a href="index.html">Product</a>
                </li>
                <li>
                  <a href="#">Customers</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
              </ul>
              <div class="nav-btns navbar-btn">
                <a id="btndark" href="#">
                  Sign In
                </a>
                <a id="btndark" href="#">
                  Sign Up
                </a>
              </div>
              <div class="darklight">
                <button id="dark-light">
                  <img src={darkImg} alt="" />
                </button>
              </div>
            </div>
            <button class="hamburger">
              <img src={openIcon} alt="hamburger" />
            </button>
          </div>
        </div>
        <div id="navbar-responsive">
          <ul>
            <li>
              <a class="nav-menus-link" href="index.html">
                Product
              </a>
            </li>
            <li>
              <a class="nav-menus-link" href="#">
                Customers
              </a>
            </li>
            <li>
              <a class="nav-menus-link" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a class="nav-menus-link" href="#">
                Resources
              </a>
            </li>
            <li>
              <a class="nav__responsive-btn" href="contact.html">
                Sign In
              </a>
            </li>
            <li>
              <a class="nav__responsive-btn" href="contact.html">
                Sign Up
              </a>
            </li>
          </ul>
          <button id="close-navbar">
            <img src={closeIcon} alt="" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
