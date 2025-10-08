import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">React Website</div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/props" className="nav-item">
            Props Demo
          </NavLink>
        </li>
        <li>
          <NavLink to="/state" className="nav-item">
            Hook
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
