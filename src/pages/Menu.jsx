import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MenuPizzas from "../components/MenuPizzas";

const Menu = () => {
  const { items } = useSelector((state) => state.pizza);
  
  const [property, setProperty] = useState({});

  const handleChange = (e) => {
    setProperty(e.target.name)
  };

  useEffect(() => {
    setProperty("pizza")
  },[])
  
  return (
    <>
      <div className="container p-3" style={{ backgroundColor: "light-green" }}>
        <div
          style={{
            backgroundColor: "#DC3545",
            width: "100%",
            height: "3rem",
            color: "white",
            fontSize: "2rem",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginBlock: "25px",
          }}
        >
          Our Menu
        </div>

        <div id="menu-nav" className="navbar navbar-expand-lg bg-warning ">
          <ul className="navbar-ul">
            <li className="nav-item">
              <a
                className="nav-link fw-bold mx-1 "
                href="#"
                aria-current="page"
                name="pizza"
                onClick={(e) => handleChange(e)}
              >
                PIZZA
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-bold mx-1 "
                aria-current="page"
                href="#"
                name="roll"
                onClick={(e) => handleChange(e)}
              >
                PIZZA ROLLS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-bold mx-1 "
                aria-current="page"
                href="#"
                name="box"
                onClick={(e) => handleChange(e)}
              >
                BOX
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-bold mx-1 "
                aria-current="page"
                href="#"
                name="toping"
                onClick={(e) => handleChange(e)}
              >
                TOPINGS
              </a>
            </li>
          </ul>
        </div>
        <hr className="border border-warning border-2 opacity-50" />

        <div className="row g-3 p-lg-3">
          {items
            .filter((item) => item.type === property)
            .map((item) => {
              return (
                <>
                  <MenuPizzas key={item.id} item={item} />
                  <hr />
                </>
              );
            } )}
        </div>
      </div>
    </>
  );
};

export default Menu;
