import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/"> home </NavLink>
      <NavLink to="/reportes"> reportes </NavLink>
      <NavLink to="/login"> login </NavLink>
    </nav>
  );
};

export default Nav;
