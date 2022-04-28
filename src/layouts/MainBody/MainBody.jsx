/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from "react";

// react-markdown
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

// contexts
import { useLanguage } from "context/Language";
import { useIndex } from "context/IndexContext";

// codememe2share components
import { Container, AppleDots } from "codememe2share";

// own components
import Loader from "components/Loader/Loader";

// services
import { FetchMarkdown } from "services/post";

// styles
import MainBodyCss, { MainContentCss, MarkdownCss } from "./styles";

const MainBody = () => {
  const { languageState } = useLanguage();

  const { indexState } = useIndex();

  const [loading, setLoading] = useState(true);
  const [markdownContent, setMarkdownContent] = useState("");

  const init = async () => {
    const newMarkdownContent = await FetchMarkdown(
      languageState.texts.Home.Main.Content[indexState.index]
    );
    setMarkdownContent(newMarkdownContent.markdown);
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, [indexState.index]);

  return (
    <Container className={MainBodyCss}>
      <Container style={{ minHeight: 300, height: "calc(90vh - 20px)" }}>
        <AppleDots />
        <Container className={MainContentCss}>
          {markdownContent !== "" && (
            <ReactMarkdown className={MarkdownCss} remarkPlugins={[remarkGfm]}>
              {markdownContent}
            </ReactMarkdown>
          )}
          <Loader visible={loading} id="small-loading" />
        </Container>
      </Container>
    </Container>
  );
};

export default MainBody;
