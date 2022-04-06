/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import React from "react";

// codememe2share components
import { Container, AppleDots } from "codememe2share";

// styles
import MainBodyCss from "./styles";

const MainBody = () => {
  return (
    <Container className={MainBodyCss}>
      <AppleDots />
    </Container>
  );
};

export default MainBody;
