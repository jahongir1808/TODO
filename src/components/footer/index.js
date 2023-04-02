// rfce
import React from "react";
import "./Footer.css";
import footerImg from "../../assets/images/joinimg.png";

export default function Footer() {
  return (
    <section id="join">
      <div class="container">
        <div class="join-card">
          <div class="join__card-left">
            <h1>Join 100 Compannies who boost their business with Product</h1>
            <a href="#">Get This</a>
          </div>
          <div class="join__card-right">
            <img src={footerImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
