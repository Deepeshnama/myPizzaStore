import React from "react";
import "./Pizzaitem.css";
import { Link } from "react-router-dom";

const PizzaItems = ({ item }) => {
  return (
    <div className="col my-2 sunny">
      <div className="card">
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{item.name}</h3>
          <p className="card-text">{item.description}</p>
          <h3 className="card-text">₹ {item.price}</h3>
          <Link to={`/pizzacontainer/${item.id}`}>
            <button className="btn btn-primary">Add To Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PizzaItems;
