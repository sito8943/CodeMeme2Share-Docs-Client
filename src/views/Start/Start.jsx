/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";

// framer-motion
import { motion } from "framer-motion";

// react-router-dom
import { Link } from "react-router-dom";

// codememe2share components
import MemeShare, { Container, Rotate, AppleDots, Title, Paragraph, Button } from "codememe2share";

// contexts
import { useLanguage } from "context/Language";

// own components
import BigLoading from "layouts/BigLoading/BigLoading";

// icons
import { BsFillArrowRightCircleFill } from "react-icons/bs";

// images
import logo from "assets/images/logo.svg";

// styles
import { RotateCss, ParagraphCss, LinkButtonCss } from "./styles";

const Start = () => {
  const { languageState } = useLanguage();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <MemeShare background="random">
      <BigLoading visible={loading} />
      {!loading && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Container>
            <AppleDots />
            <Rotate className={RotateCss} delay="5s">
              <img src={logo} alt="react-logo" />
            </Rotate>
            <Title variant="h3">CodeMeme2Share</Title>
            <Paragraph className={ParagraphCss}>{languageState.texts.Start.Content}</Paragraph>

            <Link to="/docs" style={{ textDecoration: "none" }}>
              <Button className={LinkButtonCss}>
                {languageState.texts.Start.Button}
                <BsFillArrowRightCircleFill />
              </Button>
            </Link>
          </Container>
        </motion.div>
      )}
    </MemeShare>
  );
};

export default Start;
