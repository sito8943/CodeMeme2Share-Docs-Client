// @emotion
import { css } from "@emotion/css";

const MarkdownCss = css({
  color: "aliceblue",
  a: {
    color: "dodgerblue",
  },
  code: {
    background: "#222333",
    padding: 10,
    borderRadius: 10,
    margin: "0 5px",
    color: "#bdbbbb",
  },
  pre: {
    display: "flex",
    code: {
      background: "#222333",
      padding: 15,
      borderRadius: 12,
      width: "100%",
      color: "#bdbbbb",
      overflowX: "auto",
    },
  },
  table: {
    thead: {
      borderBottom: "1px solid #fefefe8c",
      tr: {
        borderBottom: "1px solid #fefefe8c",
        th: {
          textAlign: "left",
          paddingRight: 20,
          borderBottom: "1px solid #fefefe8c",
          paddingBottom: 15,
        },
      },
    },
    tbody: {
      borderBottom: "1px solid #fefefe8c",
      tr: {
        borderBottom: "1px solid #fefefe8c",
        td: {
          textAlign: "left",
          padding: "15px 0",
          paddingRight: 20,
          borderBottom: "1px solid #fefefe8c",
        },
      },
    },
  },
});

const MainContentCss = css({
  height: "100%",
  background: "none !important",
  backdropFilter: "none !important",
  padding: 0,
  borderRadius: 0,
  overflow: "auto",
  "&::-webkit-scrollbar-thumb": {
    background: "rgb(125, 156, 167)",
    borderRadius: 4,
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "rgb(106, 145, 158)",
    boxShadow: "0 0 2px 1px rgba(102, 100, 100, 0.2)",
  },
  "&::-webkit-scrollbar-thumb:active": {
    backgroundColor: "rgb(106, 145, 158)",
  },
  "&::-webkit-scrollbar-track": {
    background: "#3a3a3a00",
    borderRadius: 4,
  },
  "&::-webkit-scrollbar-track:hover": {
    background: "#3a3a3a00",
  },
});

const MainBody = css({
  minWidth: 500,
  width: "calc(100% - 350px)",
  margin: "0 20px",
  height: "90vh",
  padding: "10px 0",
  minHeight: 300,
});

export default MainBody;

export { MainContentCss, MarkdownCss };
