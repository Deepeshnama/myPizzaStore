import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartContainer from "../components/CartContainer";
import { Link } from "react-router-dom";
import Modal from "./Popup";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  const Total = cart.reduce((p, c) => p + c.qty * c.price, 0);
  const [shipping, setShipping] = useState(0);
  const shippedCharge = parseInt(shipping);
  const [isModalOpen, setModalOpen] = useState(false);

  const GST = (Total * 18) / 100;
  const Discount = (((Total + GST) * 10) / 100).toFixed(2);
  const Dis = parseInt(Discount).toFixed(2);

  return (
    <>
      <div className="container-1 p-lg-5  ">
        <div className="row p-3 ">
          <div className="px-lg-3 col-lg-8">
            <div class="d-flex align-items-center justify-content-between pb-3">
              <h4 class="fw-semibold  ">Shopping Cart</h4>
              <h4 class="fw-semibold  ">Items &nbsp;{cart.length}</h4>
            </div>
            <table class="table my-3">
              <>
                {cart.length === 0 ? (
                  <tbody class="d-flex align-items-center justify-content-center">
                    <img
                      class="transparent my-3 w-100 "
                      src="https://limasy.com/img/empty-animation1.gif"
                      alt="Loading"
                    />
                  </tbody>
                ) : (
                  <>
                    <thead className="text-center">
                      <tr>
                        <th scope="col">Remove</th>
                        <th scope="col">Products</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody className="text-center align-middle">
                      {cart?.map((i, index) => (
                        <CartContainer key={index} i={i} />
                      ))}
                    </tbody>
                  </>
                )}
              </>
            </table>
          </div>

          <div className="px-3 relative h-full col-lg-4">
            <div className="px-3 lg:overflow-auto ">
              <h3 className=" fw-bold text-dark mb-3">Order Details</h3>
              <div className="space-y-6">
                <div className="card bg-secondary text-light rounded-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="mb-2">Card details</h5>
                    </div>

                    <p className="small mb-2">Card type</p>
                    <a type="submit" className="text-danger">
                      <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                    </a>
                    <a type="submit" className="text-dark">
                      <i className="fab fa-cc-visa fa-2x me-2"></i>
                    </a>
                    <a type="submit" className="text-primary">
                      <i className="fab fa-cc-amex fa-2x me-2"></i>
                    </a>
                    <a type="submit" className="text-warning">
                      <i className="fab fa-cc-paypal fa-2x"></i>
                    </a>

                    <form className="mt-4">
                      <div className="form-white mb-4">
                        <input
                          type="text"
                          id="typeName"
                          className="form-control border-1 border-red-900"
                          size="17"
                          placeholder="Cardholder's Name"
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          id="typeText"
                          className="form-control form-control-lg font"
                          size="17"
                          placeholder="1234 5678 9012 3457"
                        />
                        <label className="form-label">Card Number</label>
                      </div>

                      <div className="row mb-4">
                        <div className="col-md-6">
                          <div className="form-outline form-white font">
                            <input
                              type="text"
                              id="typeExp"
                              className="form-control form-control-lg"
                              placeholder="MM/YYYY"
                              size="10"
                            />
                            <label className="form-label">Expiration</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-outline form-white">
                            <input
                              type="password"
                              id="typeText"
                              className="form-control form-control-lg"
                              placeholder="&#9679;&#9679;&#9679;"
                              size="1"
                            />
                            <label className="form-label">CVV</label>
                          </div>
                        </div>
                      </div>
                    </form>

                    <hr className="my-4" />

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Item</p>
                      <p className="mb-2 font">({cart.length})</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2 font">₹{Total}</p>
                    </div>

                    <div className="d-flex justify-content-between my-2">
                      <p className="my-2">Shipping Charge</p>
                      <select
                        className="text-dark form-select"
                        onChange={(e) => setShipping(e.target.value)}
                      >
                        <option selected>Select</option>
                        <option value={5} className="font">
                          4KM -₹5 Charge
                        </option>
                        <option value={15} className="font">
                          8KM -₹15 Charge
                        </option>
                        <option value={20} className="font">
                          10KM -₹20 Charge
                        </option>
                      </select>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">GST Tax</p>
                      <p className="mb-2 font">₹{GST}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Discount 10%</p>
                      <p className="mb-2 font">₹{Discount}</p>
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-2 text-dark">Total(Incl. taxes)</p>
                      <p className="mb-2 text-dark font">
                        ₹{Total + GST + shippedCharge - Dis}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="btn btn-info btn-lg bg-light text-dark"
                      onClick={() => setModalOpen(true)}
                    >
                      <div className="d-flex align-items-center justify-content-between ">
                        <span className="text-danger mx-1 font">
                          ₹{Total + GST + shippedCharge - Dis}
                        </span>
                        <span>
                          Checkout{" "}
                          <i className="fas fa-long-arrow-alt-right "></i>
                        </span>
                      </div>
                    </button>

                    {isModalOpen && (
                      <Modal onClose={() => setModalOpen(false)}>
                        <form className="w-100 p-4 rounded-lg modal-form">
                          <div className="grid sm:gap-6 mb-3 sm:mb-6 md:grid-cols-2">
                            <div>
                              <label className="d-block sm:mb-2 text-sm font-medium text-secondary ">
                                First name
                              </label>
                              <input
                                type="text"
                                id="first_name"
                                className="form-control  border border-secondary  text-sm rounded-3 focus:ring-info focus:border-info block w-100 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter Your Name"
                                required
                              />
                            </div>

                            <div>
                              <label className="block sm:mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Last name
                              </label>
                              <input
                                type="text"
                                id="last_name"
                                className="form-control  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter Your Surname"
                                required
                              />
                            </div>

                            <div>
                              <label className="block sm:mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Phone number
                              </label>
                              <input
                                id="phone"
                                className="form-control font  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="91+"
                              />
                            </div>

                            <div>
                              <label className="block sm:mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                State
                              </label>
                              <input
                                className="form-control  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Place Name"
                                required
                              />
                            </div>
                          </div>

                          <div className="w-full">
                            <label className="block sm:mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Shipping address
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              className="form-control  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Place Name"
                              required
                            />
                            <select
                              type="tel"
                              id="phone"
                              className="form-select  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option value="india">India</option>
                              <option value="usa">United States</option>
                              <option value="south">South Africa</option>
                              <option value="dubai">Dubai</option>
                            </select>
                          </div>

                          <div className="sm:mb-6 mt-3">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Email address
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="form-control  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="john.doe@.com"
                              required
                            />
                          </div>

                          <div className="flex items-start my-2">
                            <div className="flex items-center sm:h-5">
                              <input
                                id="remember"
                                type="checkbox"
                                className="w-4 sm:h-4 border border-gray-300 rounded  focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                required
                              />
                            </div>
                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              I agree with the &nbsp;
                              <a
                                href="#"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                              >
                                terms and conditions
                              </a>
                              .
                            </label>
                          </div>
                          <button
                            href="https://www.phonepe.com/business-solutions/payment-gateway/"
                            type="submit"
                            className="btn btn-dark text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Payment
                          </button>
                        </form>
                      </Modal>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="px-1 card flex-wrap">
            <h4 class="fw-bold mb-3">Order Summary</h4>
            <div class="flex justify-content-between my-4">
              <span class="fw-semibold text-uppercase font">
                Items {cart.length}
              </span>
              <span class="fw-semibold font ">₹0</span>
            </div>
            <div>
              <label class="d-inline-block mb-2 text-uppercase">Shipping</label>
              <select class="d-block p-1 text-secondary w-100">
                <option value="">Your Cart is Empty</option>
              </select>
            </div>
            <div class="py-4">
              <label for="promo" class="d-inline-block mb-2 text-uppercase">
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter promo code here"
                class="p-2 w-100 text-black"
                value=""
              />
              <p class=" text-danger mx-1">Enter valid Promocode</p>
            </div>
            <div class="border-top py-2">
              <div class="flex fw-semibold align-items-center justify-content-between ">
                <p>Shipping:</p>
                <p>₹0</p>
              </div>
              <div class="flex fw-semibold align-items-center justify-content-between mt-5 text-uppercase">
                <span>Total cost</span>
                <span>₹ </span>
              </div>
              <button class="btn btn-info fw-semibold py-2 text-white text-uppercase w-100 my-3">
                Checkout
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Cart;
