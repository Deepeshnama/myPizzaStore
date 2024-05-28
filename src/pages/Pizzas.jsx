import React from "react";
import "../index.css";
import { useSelector } from "react-redux";
import PizzaItems from "../components/PizzaItems";

const Pizzas = () => {
  const { items } = useSelector((state) => state.pizza);

  return (
    <div className="container text-center pizzas ">
      <div className="row row-cols-3">
         {
          items.filter((item) => {
            if(item.type === "pizza"){
              return item;
            }
          }).map((item) => {
            return <PizzaItems key = {item.id} item = {item} />
          })
         }
      </div>
    </div>
  );
};

export default Pizzas;
