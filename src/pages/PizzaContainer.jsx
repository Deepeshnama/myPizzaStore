import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPizza } from "../features/PizzaSlice";
import { addToCart } from "../features/CartSlice";

const PizzaContainer = () => {
  const { item } = useSelector((state) => state.pizza);

  const [topings, setTopings] = useState("")

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPizza(id))
  }, []);

  const handleChange = (e) => {
    setTopings(e.target.value);
  };

  const AddToCart = () => {
    dispatch(addToCart(item[0]));
  };

  let selectedPrice = Number(item[0]?.price) + Number(topings)
// console.log(item[0])
  return (
    <div className="p-lg-5">
      <div className="container text-center ">
        <div className="card-body my-3 d-flex align-items-center justify-content-center flex-column font">
          <img src={item[0]?.image} alt="404 Image not Found!!" />
          <h5 className="card-title fw-semibold my-3">{item[0]?.name}</h5>
          <p className="text-dark text-wrap fs-5 fst-italic font">
            Nutritions:- ({item[0]?.nutrition})
          </p>
          {/* <select
            className="form-select  my-3 w-75 font"
            value={topings}
            onChange={handleChange}
          >
            <option className="font" value="" selected>
            --Extra Topings--
            </option>
            <option className="font" value="29">
              Chilli, joghurt, italian, pelati &nbsp; : ₹29
            </option>
            <option className="font" value="35">
              Nacho, cheddar, monterey, brick &nbsp; : ₹35
            </option>
            <option className="font" value="49">
              Rucola, corn, parsley, beans, tomatoes, peppers &nbsp; : ₹49
            </option>
          </select> */}
          <h5 className="text-danger my-2 fw-semibold font ">
            ₹ {selectedPrice}
          </h5>
          <Link
            to={"/cart"}
            className="btn btn-warning text-light fw-semibold my-2 rounded-pill"
            onClick={() => AddToCart()}
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PizzaContainer;
