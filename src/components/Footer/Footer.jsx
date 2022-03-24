import React from "react";

// react-router-dom
import { Outlet } from "react-router-dom";

// components
import { Container, Paragraph, Button } from "codememe2share";

// styles
import "./style.scss";

const Footer = () => {
  return (
    <Container ignoreDefault className="footer">
      <Paragraph style={{ margin: 0 }}>
        Created with <strong>CodeMeme2Share</strong>
      </Paragraph>
      <Button ignoreDefault>About</Button>
      <Outlet />
    </Container>
  );
};

export default Footer;
