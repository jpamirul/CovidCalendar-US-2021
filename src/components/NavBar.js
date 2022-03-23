import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/ThreadContainer">
              Covid Calendar 2021 "(Jan - May)"
            </NavLink>
          </li>
          <li>
            <NavLink to="/AboutCovid">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
