import React from "react";
import Clients from "../components/clients";
import Home from "../components/home";
import Product from "../components/product";
import Navbar from "../components/navbar";
import Price from "../components/price";
import Strategies from "../components/strategies";
import Footer from "../components/footer";

const Lesson1 = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Product />
        <Strategies />
        <Price />
        <Clients />
      </main>
      <Footer />
    </>
  );
};

export default Lesson1;
