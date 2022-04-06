// codememe2share components
import MemeShare, { Container, Rotate } from "codememe2share";

// images
import logo from "assets/images/logo.svg";

function App() {
  return (
    <MemeShare>
      <Container>
        <Rotate>
          <img src={logo} alt="react-logo" />
        </Rotate>
      </Container>
    </MemeShare>
  );
}

export default App;
