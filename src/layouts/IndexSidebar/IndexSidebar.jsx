/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import React from "react";

// react-router-dom
import { Link } from "react-router-dom";

// context
import { useLanguage } from "context/Language";

// context
import { useIndex } from "context/IndexContext";

// codememe2share components
import { Container, AppleDots, Title, Button, Paragraph } from "codememe2share";

// styles
import IndexSidebarCss, {
  SubIndexCss,
  IndexContentCss,
  ListButtonCss,
  IndexSelectedCss,
} from "./styles";

const IndexSidebar = () => {
  const { languageState } = useLanguage();

  const { indexState, setIndexState } = useIndex();

  const listButtonClicked = (e) => {
    const { id } = e.target;
    setIndexState({ type: "set", to: Number(id.substring(1)) });
  };

  return (
    <Container className={IndexSidebarCss}>
      <Container className={IndexContentCss}>
        <AppleDots />
        <Title variant="h4">{languageState.texts.Home.Index.Title}</Title>
        {languageState.texts.Home.Index.Content.map((item, i) => {
          return item.Content ? (
            <div key={`d${i}`} style={{ display: "flex", flexDirection: "column" }}>
              <Paragraph style={{ marginBottom: 0 }}>{item.Title}</Paragraph>
              {item.Content.map((jtem, j) => (
                <Link to={`/docs/${jtem.Id}`}>
                  <Button
                    action={listButtonClicked}
                    className={`${ListButtonCss} ${
                      indexState.index === jtem.Id ? IndexSelectedCss : ""
                    } ${jtem.Sub ? SubIndexCss : ""}`}
                    ignoreDefault
                    key={`i${j}`}
                    id={`i${jtem.Id}`}
                  >
                    {jtem.Label}
                  </Button>
                </Link>
              ))}
            </div>
          ) : (
            <Link to={`/docs/${item.Id}`}>
              <Button
                action={listButtonClicked}
                className={`${ListButtonCss} ${
                  indexState.index === item.Id ? IndexSelectedCss : ""
                }`}
                ignoreDefault
                key={`id${i}`}
                id={`i${item.Id}`}
              >
                {item.Title}
              </Button>
            </Link>
          );
        })}
      </Container>
    </Container>
  );
};

export default IndexSidebar;
