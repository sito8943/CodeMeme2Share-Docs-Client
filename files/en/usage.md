## Usage

Is time to code:

### Quick start

Here's a quick example to get you started, it's literally all you need:

```
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import MemeShare, { Container, AppleDots, Title } from "codememe2share";

const App () => {
  return (
    <MemeShare>
      <Container>
        <AppleDots />
          <Title variant="h3">
            Hola Mundo
          </Title>
       </Container>
    </MemeShare>
  );
}

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

⚠️ _Note this examples is using react@18.0.0_ ⚠️

Yes, this really is all you need to get started as you can see in [demo](https://)

### Best preview

This documentation always reflects the latest stable version of CodeMeme2Share. You can find older versions of the documentation on a [separate page](https://)

### Next steps

Now that you have an idea of the basic setup, it's time to learn more about:

- How to set entire page like CodeMeme2Share?
- How to [customize](https://) the components using [@emotion/css](https://npmjs.com/package/@emotion/css)?
