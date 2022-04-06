/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import React from "react";

// codememe2share components
import { Container, AppleDots } from "codememe2share";

// styles
import IndexSidebarCss from "./styles";

const IndexSidebar = () => {
  return (
    <Container className={IndexSidebarCss}>
      <AppleDots />
    </Container>
  );
};

export default IndexSidebar;
