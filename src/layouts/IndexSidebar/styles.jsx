// @emotion
import { css } from "@emotion/css";

const ListButtonCss = css({
  background: "none",
  border: "none",
  color: "aliceblue",
  fontWeight: 500,
  textAlign: "left",
  fontSize: 15,
  cursor: "pointer",
  marginBottom: 10,
});

const IndexContentCss = css({
  height: "100%",
});

const IndexSidebarCss = css({
  width: 340,
  marginLeft: 20,
  height: "90vh",
  minHeight: 300,
});

export { IndexContentCss, ListButtonCss };

export default IndexSidebarCss;