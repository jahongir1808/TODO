import React, { Component } from "react";
import Slider from "react-slick";
import "./Sertificate.scss";
import sertificateImg1 from "../../assets/images/sertificate-img1.png";
import sertificateImg2 from "../../assets/images/sertificate-img2.png";
import sertificateImg3 from "../../assets/images/sertificate-img3.png";
import sertificateImg4 from "../../assets/images/sertificate-img4.png";
import sertificateImg5 from "../../assets/images/sertificate-img5.png";

export default class Sertificate extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="sertificate">
        <div className="container">
          <div className="sertificate-head">
            <h2>
              Качество продукции подтверждают <span>сертификаты</span>
            </h2>
          </div>
          <Slider {...settings} className="sertificate_carousel-custom">
            <div className="sertificate_carousel-card">
              <img src={sertificateImg1} alt="" />
            </div>
            <div className="sertificate_carousel-card">
              <img src={sertificateImg2} alt="" />
            </div>
            <div className="sertificate_carousel-card">
              <img src={sertificateImg3} alt="" />
            </div>
            <div className="sertificate_carousel-card">
              <img src={sertificateImg4} alt="" />
            </div>
            <div className="sertificate_carousel-card">
              <img src={sertificateImg5} alt="" />
            </div>
            <div className="sertificate_carousel-card">
              <img src={sertificateImg1} alt="" />
            </div>
            <div className="sertificate_carousel-card">
              <img src={sertificateImg2} alt="" />
            </div>
            <div className="sertificate_carousel-card">
              <img src={sertificateImg3} alt="" />
            </div>
            <div className="sertificate_carousel-card">
              <img src={sertificateImg4} alt="" />
            </div>
            <div className="sertificate_carousel-card">
              <img src={sertificateImg5} alt="" />
            </div>
            <div className="sertificate_carousel-card">
              <img src={sertificateImg1} alt="" />
            </div>
            <div className="sertificate_carousel-card">
              <img src={sertificateImg2} alt="" />
            </div>
            <div className="sertificate_carousel-card">
              <img src={sertificateImg3} alt="" />
            </div>
            <div className="sertificate_carousel-card">
              <img src={sertificateImg4} alt="" />
            </div>
            <div className="sertificate_carousel-card">
              <img src={sertificateImg5} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
