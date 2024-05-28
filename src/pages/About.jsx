import React from "react";
import "../index.css";
import About_1 from "../assets/About-1.jpg";
import About_2 from "../assets/About-2.png";
import About_3 from "../assets/About-3.jpg";

const customStyle = {
  fontSize: 20,
};

const About = () => {
  return (
    <div className="">
      <div className="about-main text-center w-80">
        <h1 className="text-center my-5 ">
          WE USE FRESH INGREDIENTS. <br />
          WHY IS THAT?
        </h1>

        <p className="text-center" style={customStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod and created tempor magna aliqua. <br /> Ut enim ad and better
          or ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod and created tempor magna aliqua. <br /> Ut enim ad and better
          or ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
          consectetur adipiscing elitlabore et dolore magna aliqua.
        </p>
      </div>
      <div className="text-center">
        <img className="image-1 syska " src={About_1} width={500} alt="" />
      </div>
      <div className="">
        {/* <img className="image-2" src={About_2}  width={200} alt="" /> */}
      </div>
      <div className="last">
        <img
          className="image-3"
          src={About_3}
          width={300}
          height={350}
          alt=""
        />
        <span>
          <h1>WHO WE ARE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim
            <br /> commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu <br /> culpa qui officia
            deserunt mollit anim id est laborum. Lorem ipsum dolor sit <br />{" "}
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut <br /> labore et dolore magna aliqua.{" "}
          </p>
        </span>
      </div>
    </div>
  );
};

export default About;
