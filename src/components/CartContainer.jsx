import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQty, incrementQty, removeFromCart } from "../features/CartSlice";

const CartContainer = ({i}) => {
  const { items } = useSelector((state) => state.pizza);
  let { name, image, id, price, qty } = i;
  const dispatch = useDispatch();
  const removeProduct = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleAdd = (i) => {
    dispatch(addToCart(i));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQty(id))
  };

  const handleDecrement = (id) => {
    qty> 1 ? (dispatch(decrementQty(id))) : (qty=0)
  };

  let Total = price * qty;

  // console.log(i);
  return (
    <tr>
      <th scope="row ">
        <button className="btn btn-danger" onClick={() => removeProduct(id)}>
          <i className="fa-regular fa-trash-can fa-xl"></i>
        </button>
      </th>

      <td>
        <img src={image} alt="" className="w-50" />
        {/* <h5 className=" text-secondary">{i.name}</h5> */}
      </td>
      <td>
        <p className="fs-lg-5 fw-semibold font">₹ {price}</p>
      </td>
      <td>
        <div className=" d-flex align-items-center justify-content-center flex-row ">
          <button
            className="btn btn-sm rounded border"
            onClick={() => handleDecrement(id)}
          >
            -
          </button>
          <h6 className="fs-lg-5 fw-semibold font my-1 mx-2">{qty}</h6>
          <button
            className="btn btn-sm rounded border"
            onClick={() => handleIncrement(id)}
          >
            +
          </button>
        </div>
      </td>
      <td className="fs-lg-5 fw-semibold font">₹ {Total}</td>
    </tr>
  );
};

export default CartContainer;
