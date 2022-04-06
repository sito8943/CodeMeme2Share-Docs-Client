/* eslint-disable react/function-component-definition */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";

// react-lottie
import Lottie from "react-lottie";

// codememe2share components
import MemeShare, {
  Loading,
  Container,
  Rotate,
  AppleDots,
  LinkButton,
  Title,
  Paragraph,
} from "codememe2share";

// icons
import { BsFillArrowRightCircleFill } from "react-icons/bs";

// images
import lottie from "assets/images/loading.json";
import logo from "assets/images/logo.svg";

const Start = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <MemeShare background="random">
      <Loading
        style={{
          transition: "all 1000 ease",
          opacity: loading ? 1 : 0,
          zIndex: loading ? 99 : -1,
          background: "#222333",
        }}
      >
        <Container style={{ width: 200, background: "none", backdropFilter: "none" }}>
          <Lottie options={{ animationData: lottie }} />
        </Container>
      </Loading>
      <Container>
        <AppleDots />
        <Rotate style={{ width: 250, margin: "auto" }} delay="5s">
          <img src={logo} alt="react-logo" />
        </Rotate>
        <Title variant="h3">CodeMeme2Share</Title>
        <Paragraph style={{ textAlign: "center" }}>
          Do you want to make your cool code shorts public?
        </Paragraph>
        <LinkButton
          link="/docs"
          style={{
            margin: "auto",
            width: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          Get started
          <BsFillArrowRightCircleFill />
        </LinkButton>
      </Container>
    </MemeShare>
  );
};

export default Start;
