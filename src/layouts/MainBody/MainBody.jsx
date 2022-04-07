/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import React from "react";

// prop-types
import PropTypes from "prop-types";

// codememe2share components
import { Container, AppleDots } from "codememe2share";

// styles
import MainBodyCss, { MainContentCss } from "./styles";

const MainBody = (props) => {
  const { texts } = props;

  return (
    <Container className={MainBodyCss}>
      <Container className={MainContentCss}>
        <AppleDots />
        {texts.Content}
      </Container>
    </Container>
  );
};

MainBody.propTypes = {
  texts: PropTypes.objectOf(PropTypes.any),
};

export default MainBody;
