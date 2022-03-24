import React from "react";

// react-router-dom
import { Outlet } from "react-router-dom";

// components
import { Container, Title } from "codememe2share";

// styles
import "./style.scss";

const Navbar = () => {
  return (
    <Container ignoreDefault className="navbar">
      <Title variant="h5">Opt</Title>
      <Outlet />
    </Container>
  );
};

export default Navbar;
