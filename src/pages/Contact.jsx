import React from "react";
import "../index.css"

const Contact = () => {
  return (
    <div className="contact">
      <hr />
      <span>
        <h3>ADDRESS</h3>
        <p>
          3021 Lady Bug Drive <br />
          Brooklyn, NY 11230, USA
        </p>
      </span>
      <hr />
      <span>
        <h3>OPENING HOURS</h3>
        <p>
          Monday - Friday = 8am - 11pm <br /> <br /> Saturday = 8am - 1am{" "}
          <br /> <br /> Sunday (closed)
        </p>
      </span>
      <hr />
      <form className="con-form">
        <h2 className="mb-3 con-head">CONTACT FORM</h2>
        <div className="mb-3 contact-form">
          <input
            type="email"
            placeholder="Enter Your Mail..."
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Enter Your Password..."
            id="exampleInputPassword1"
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary mx-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
