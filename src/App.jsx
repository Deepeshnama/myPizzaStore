import React from "react";
import Navbar from "./components/Navbar";
import FirstSection from "./components/FirstSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pizzas from "./pages/Pizzas";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import PizzaContainer from "./pages/PizzaContainer";
import Cart from "./pages/Cart"


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FirstSection/>}/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={ <Cart/>} />
        <Route path="/pizzacontainer/:id" element={<PizzaContainer/>} />
      </Routes>
      
    </Router>
  );
};

export default App;
