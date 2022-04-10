/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import MemeShare, { Container, AppleDots, Title } from "codememe2share";

const App = () => {
  return (
    <MemeShare>
      <Container>
        <AppleDots />
        <Title variant="h3">😃 Hola Mundo 😃</Title>
      </Container>
    </MemeShare>
  );
};

export default App;
