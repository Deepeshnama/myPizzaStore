import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    //     <nav className="navbar navbar-expand-lg bg-secondary">
    //       <div className="container-fluid">
    //         <h1 to={"/"} className="navbar-brand logo" href="#">
    //           SPICY AFFAIRS
    //         </h1>
    //         <button
    //           className="navbar-toggler"
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#navbarNavAltMarkup"
    //           aria-controls="navbarNavAltMarkup"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //         >
    //           <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //           <div className="navbar-nav">
    //             <Link to={"/"} className="nav-link home active text-light" aria-current="page" href="#">
    //               Home
    //             </Link>
    //             <Link to={"/menu"} className="nav-link" aria-current="page" href="#">
    //               Menu
    //             </Link>
    //             <Link to={"/pizzas"} className="nav-link" href="#">
    //               Pizzas
    //             </Link>
    //             <Link to={"/contact"} className="nav-link" href="#">
    //               Contact Us
    //             </Link>
    //             <Link to={"/about"} className="nav-link" href="#">
    //               About Us
    //             </Link>
    //           </div>
    //         </div>

    // <Link to={"/cart"}>
    // <button className="btn btn-sm btn-warning">Order Now</button>

    // </Link>

    //       </div>
    //     </nav>

    <nav class="navbar navbar-expand-lg bg-danger">
      <div class="container-fluid">
        <div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand text-light" href="#">
            Spicy Affairs
          </a>
        </div>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link
              to={"/"}
              className="nav-link home active text-light"
              aria-current="page"
              href="#"
            >
              Home
            </Link>
            <Link
              to={"/menu"}
              className="nav-link"
              aria-current="page"
              href="#"
            >
              Menu
            </Link>
            <Link to={"/pizzas"} className="nav-link" href="#">
              Pizzas
            </Link>
            <Link to={"/contact"} className="nav-link" href="#">
              Contact Us
            </Link>
            <Link to={"/about"} className="nav-link" href="#">
              About Us
            </Link>
          </div>
        </div>

        <Link to={"/cart"}>
          <button className="btn btn-sm btn-warning">Order Now</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
