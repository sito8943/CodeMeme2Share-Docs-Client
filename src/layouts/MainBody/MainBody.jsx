/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import React from "react";

// codememe2share components
import { Container, AppleDots } from "codememe2share";

// styles
import MainBodyCss, { ContentCss } from "./styles";

const MainBody = () => {
  return (
    <Container className={MainBodyCss}>
      <Container className={ContentCss}>
        <AppleDots />
      </Container>
    </Container>
  );
};

export default MainBody;
