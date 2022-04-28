// @emotions
import { css } from "@emotion/css";

const LinkToNPMCss = css({
  color: "aliceblue",
  textDecoration: "none",
  "&:hover": {
    color: "#bdbbbb",
  },
});

const NavbarCss = css({
  paddingLeft: 10,
  height: 55,
  background: "#222333ec",
  display: "flex",
  alignItems: "center",
});

export { LinkToNPMCss };

export default NavbarCss;
