/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import React, { useEffect, useState } from "react";

// react-markdown
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

// contexts
import { useLanguage } from "context/Language";

// context
import { useIndex } from "context/IndexContext";

// codememe2share components
import { Container, AppleDots } from "codememe2share";

// services
import { FetchMarkdown } from "services/post";

// styles
import MainBodyCss, { MainContentCss, MarkdownCss } from "./styles";

const MainBody = () => {
  const { languageState } = useLanguage();

  const { indexState } = useIndex();

  const [markdownContent, setMarkdownContent] = useState("");

  const init = async () => {
    const newMarkdownContent = await FetchMarkdown(
      languageState.texts.Home.Index.Content[indexState.index]
    );
    setMarkdownContent(newMarkdownContent.markdown);
  };

  useEffect(() => {
    init();
  }, [indexState.index]);

  return (
    <Container className={MainBodyCss}>
      <Container style={{ minHeight: 300, height: "calc(90vh - 20px)" }}>
        <AppleDots />
        <Container className={MainContentCss}>
          <ReactMarkdown className={MarkdownCss} remarkPlugins={[remarkGfm]}>
            {markdownContent}
          </ReactMarkdown>
        </Container>
      </Container>
    </Container>
  );
};

export default MainBody;
