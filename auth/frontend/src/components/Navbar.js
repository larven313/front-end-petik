import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/petik.png";

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <NavLink to={"/dashboard"} class="navbar-item">
            <img className="p-3 ml-4 mt-1" src={logo} width="64" alt="logo" />
          </NavLink>

          <a
            href="!#"
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <button class="button is-light">Log out</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
