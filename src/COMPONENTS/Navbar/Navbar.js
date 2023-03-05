import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const styleFunction = () => {
    let nav = document.getElementById("nav");
    nav.style.display = "block";
    nav.style.background = "#ba2e1f";
    nav.style.width = "100%";
    nav.style.height = "auto";
    nav.style.marginBottom = 0;
    nav.style.zIndex = 9999999999;
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.padding = "1rem 0 ";
    nav.style.position = "absolute";
    nav.style.top = "60px";
  };

  return (
    <>
      <nav id="nav" className="nav1">
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        <NavLink className="navLink" to="/Shop">
          Shop
        </NavLink>
        <NavLink className="navLink" to="/Register">
          Register
        </NavLink>
        <NavLink className="navLink" to="/Login">
          Login
        </NavLink>
        <NavLink className="navLink" to="/Contact">
          Contact
        </NavLink>
        <NavLink className="navLink" to="/User">
          User
        </NavLink>
      </nav>
      <nav className="nav2">
        <div className="secondNavLinks">
          <NavLink className="secondNavLink" to="/">
            R5 Express
          </NavLink>
          <NavLink className="secondNavLink" to="/Cart">
            <i className="fa-solid fa-cart-shopping"></i> Cart
          </NavLink>
        </div>
      </nav>
      <button
        id="btn1"
        onClick={() => {
          let btn2 = document.getElementById("btn2");
          btn2.style.display = "block";
          styleFunction();
        }}
        className="mobileBtn"
      >
        <i className="fas fa-bars"></i>
      </button>
      <button
        id="btn2"
        onClick={() => {
          let nav = document.getElementById("nav");
          let btn1 = document.getElementById("btn1");
          let btn2 = document.getElementById("btn2");
          nav.style.display = "none";
          btn1.style.display = "block";
          btn2.style.display = "none";
        }}
        className="mobileBtn"
      >
        <i className="fas fa-times"></i>
      </button>
    </>
  );
};

export default Navbar;
