/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import React from "react";

// prop-types
import PropTypes from "prop-types";

// codememe2share components
import { Container, AppleDots, Title } from "codememe2share";

// styles
import IndexSidebarCss, { IndexContentCss } from "./styles";

const IndexSidebar = (props) => {
  const { texts } = props;

  return (
    <Container className={IndexSidebarCss}>
      <Container className={IndexContentCss}>
        <AppleDots />
        <Title variant="h4">{texts.Title}</Title>
      </Container>
    </Container>
  );
};

IndexSidebar.propTypes = {
  texts: PropTypes.objectOf(PropTypes.any),
};

export default IndexSidebar;
