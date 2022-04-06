/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from "react";

// react-router-dom
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Navbar;
