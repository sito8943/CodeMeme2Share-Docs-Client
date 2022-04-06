/* eslint-disable react/function-component-definition */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";

// codememe2share components
import MemeShare, {
  Container,
  Rotate,
  AppleDots,
  LinkButton,
  Title,
  Paragraph,
} from "codememe2share";

// own components
import Loader from "components/Loader/Loader";

// icons
import { BsFillArrowRightCircleFill } from "react-icons/bs";

// images
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
      <Loader visible={loading} />
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
