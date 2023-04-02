import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./ourProduction.scss";
import productionImg1 from "../../assets/images/production-img1.png";
import productionImg2 from "../../assets/images/production-img2.png";
import productionImg3 from "../../assets/images/production-img3.png";
import productionImg4 from "../../assets/images/production-img4.png";
import productionImg5 from "../../assets/images/production-img5.png";

export default class OurProduction extends Component {
  render() {
    return (
      <div className="container">
        <div className="production-head">
          <h2>
            Наша <span>продукция</span>
          </h2>
        </div>
        <Tabs>
          <TabList>
            <Tab>Ламинатные тубы</Tab>
            <Tab>Экструзионные тубы</Tab>
            <Tab>Другая упаковка</Tab>
          </TabList>

          <TabPanel>
            <img src={productionImg1} alt="" />
            <img src={productionImg2} alt="" />
            <img src={productionImg3} alt="" />
            <img src={productionImg4} alt="" />
            <img src={productionImg5} alt="" />
          </TabPanel>
          <TabPanel>
            <img src={productionImg2} alt="" />
            <img src={productionImg3} alt="" />
            <img src={productionImg4} alt="" />
            <img src={productionImg1} alt="" />
            <img src={productionImg5} alt="" />
          </TabPanel>
          <TabPanel>
            <img src={productionImg3} alt="" />
            <img src={productionImg2} alt="" />
            <img src={productionImg1} alt="" />
            <img src={productionImg5} alt="" />
            <img src={productionImg4} alt="" />
          </TabPanel>
        </Tabs>
        <div className="production-btn">
          <button>Перейти в каталог</button>
        </div>
      </div>
    );
  }
}
