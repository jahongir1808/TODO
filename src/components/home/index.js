// rce
import React, { Component } from "react";
import homeImg from "../../assets/images/home.png";
import playImg from "../../assets/images/play.svg";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <section id="home">
        <div class="container">
          <div class="home">
            <div class="home-left">
              <h1>Work at the speed of thought</h1>
              <p>
                Tools, tutorials, design and innovation experts, all in one
                place! The most intuitive way to imagine your next user
                experience.
              </p>
              <div class="home__left-btns">
                <a class="home-leftbtn" href="#">
                  Get started
                </a>
                <div class="home__btns-watch">
                  <img src={playImg} alt="" />
                  <a href="#">Watch the Video</a>
                </div>
              </div>
            </div>
            <div class="home-right">
              <img src={homeImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
