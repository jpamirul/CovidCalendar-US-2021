import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/ThreadContainer">
              Covid Calendar 2021 "(Jan - Mar)"
            </NavLink>
          </li>
          <li>
            <NavLink to="/AboutCovid">About</NavLink>
          </li>
          <li>
            <NavLink to="/ChartCovid">Covid Chart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
