import React, { Component } from "react";
import Slider from "react-slick";
import "./Carousel.scss";
import { SlSocialVkontakte } from "react-icons/sl";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="home">
        <div className="container">
          <Slider {...settings} className="carousel-custom">
            <div className="carousel-card">
              <div className="carousel_card-left">
                <h6>
                  LEANGROUP <span>- тубы и этикетки</span>
                </h6>
                <h3>Ламинатные тубы</h3>
                <p>
                  Используются для производства зубных паст. Широко применяются
                  в сегменте косметики, пищевой индустрии, парафармацевтике,
                  бытовой химии и DIY (Do-it-Yourself).
                </p>
                <button>Каталог</button>
              </div>
              <div className="carousel_card-right">
                <a href="">
                  <SlSocialVkontakte className="icons" />
                </a>
                <a href="">
                  <FaFacebookF className="icons" />
                </a>
                <a href="">
                  <GrLinkedinOption className="icons" />
                </a>
              </div>
            </div>
            <div className="carousel-card">
              <div className="carousel_card-left">
                <h6>
                  LEANGROUP <span>- тубы и этикетки</span>
                </h6>
                <h3>Ламинатные тубы</h3>
                <p>
                  Используются для производства зубных паст. Широко применяются
                  в сегменте косметики, пищевой индустрии, парафармацевтике,
                  бытовой химии и DIY (Do-it-Yourself).
                </p>
                <button>Каталог</button>
              </div>
              <div className="carousel_card-right">
                <a href="">
                  <SlSocialVkontakte className="icons" />
                </a>
                <a href="">
                  <FaFacebookF className="icons" />
                </a>
                <a href="">
                  <GrLinkedinOption className="icons" />
                </a>
              </div>
            </div>
            <div className="carousel-card">
              <div className="carousel_card-left">
                <h6>
                  LEANGROUP <span>- тубы и этикетки</span>
                </h6>
                <h3>Ламинатные тубы</h3>
                <p>
                  Используются для производства зубных паст. Широко применяются
                  в сегменте косметики, пищевой индустрии, парафармацевтике,
                  бытовой химии и DIY (Do-it-Yourself).
                </p>
                <button>Каталог</button>
              </div>
              <div className="carousel_card-right">
                <a href="">
                  <SlSocialVkontakte className="icons" />
                </a>
                <a href="">
                  <FaFacebookF className="icons" />
                </a>
                <a href="">
                  <GrLinkedinOption className="icons" />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
