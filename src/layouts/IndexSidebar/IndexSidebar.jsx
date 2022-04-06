/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import React from "react";

// prop-types
import PropTypes from "prop-types";

// codememe2share components
import { Container, AppleDots, Title, Button, Paragraph } from "codememe2share";

// styles
import IndexSidebarCss, { IndexContentCss, ListButtonCss } from "./styles";

const IndexSidebar = (props) => {
  const { texts } = props;

  return (
    <Container className={IndexSidebarCss}>
      <Container className={IndexContentCss}>
        <AppleDots />
        <Title variant="h4">{texts.Title}</Title>
        {texts.Content.map((item, i) => {
          return item.Content ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Paragraph>{item.Title}</Paragraph>
              {item.Content.map((jtem, j) => (
                <Button className={ListButtonCss} ignoreDefault key={`i${j}`} id={`i${j}`}>
                  {jtem}
                </Button>
              ))}
            </div>
          ) : (
            <Button ignoreDefault key={`i${i}`} id={`i${i}`}>
              {item}
            </Button>
          );
        })}
      </Container>
    </Container>
  );
};

IndexSidebar.propTypes = {
  texts: PropTypes.objectOf(PropTypes.any),
};

export default IndexSidebar;
