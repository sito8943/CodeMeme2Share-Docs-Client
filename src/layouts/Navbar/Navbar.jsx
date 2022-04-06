/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from "react";

// codememe2share
import { Container, Paragraph } from "codememe2share";

// styles
import NavbarCss from "./styles";

const Navbar = () => {
  return (
    <Container ignoreDefault className={NavbarCss}>
      <Paragraph>CodeMeme2Share v:@1.12.14</Paragraph>
    </Container>
  );
};

export default Navbar;
