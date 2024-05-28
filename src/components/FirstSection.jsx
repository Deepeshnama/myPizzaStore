import React from "react";
import "../index.css";
import image_1 from "../assets/img-1.jpg";
import image_2 from "../assets/img-2.jpg";
import image_3 from "../assets/img-3.jpg";
import Menu from "../pages/Menu";
import Pizzas from "../pages/Pizzas";
import About from "../pages/About";
import Contact from "../pages/Contact";

const FirstSection = () => {
  return (
    <>
      <div className="container-fluid section-1 overflow-y-hidden">
        <h1>
          The Best
          <br /> Pizza in the <br /> Town
        </h1>
      </div>

      <Menu />
      <Pizzas />
      <About />
      <Contact />
    </>
  );
};

export default FirstSection;
