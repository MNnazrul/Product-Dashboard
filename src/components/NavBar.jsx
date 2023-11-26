import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "link-selected" : "link"}`
            }
            to="/"
          >
            Redux Toolkit
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "link-selected" : "link"}`
            }
            to="/dashboard"
          >
            Prodcuts
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "link-selected" : "link"}`
            }
            to="/cart"
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
