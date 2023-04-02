import React, { Component } from "react";
import "./News.scss";
import newsImg1 from "../../assets/images/news-img1.png";
import newsImg2 from "../../assets/images/news-img2.png";
import newsImg3 from "../../assets/images/news-img3.png";

export default class News extends Component {
  render() {
    return (
      <section id="news">
        <div className="container">
          <h2>Новости</h2>
          <div className="news">
            <div className="news-row">
              <img src={newsImg1} alt="" />
              <span>28.01.2022</span>
              <p>"ЛеанГрупп" серебряный призер EcoVadis!</p>
            </div>
            <div className="news-row">
              <img src={newsImg2} alt="" />
              <span>21.01.2022</span>
              <p>"ЛеанГрупп" серебряный призер EcoVadis!</p>
            </div>
            <div className="news-row">
              <img src={newsImg3} alt="" />
              <span>16.12.2021</span>
              <p>Туба, как вид упаковки</p>
            </div>
          </div>
          <div className="news-btn">
            <button>Все новости</button>
          </div>
        </div>
      </section>
    );
  }
}
