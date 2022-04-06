/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import React from "react";

// codememe2share components
import { Container, AppleDots, Title } from "codememe2share";

// styles
import IndexSidebarCss from "./styles";

const IndexSidebar = () => {
  return (
    <Container className={IndexSidebarCss}>
      <Container>
        <AppleDots />
        <Title variant="h4">Índice</Title>
      </Container>
    </Container>
  );
};

export default IndexSidebar;
