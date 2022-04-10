## Uso

Es hora de programar:

### Pequeño ejemplo

Aquí puedes observar un ejemplo pequeño para comenzar, es literalmente todo lo que necesitas:

```
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import MemeShare, { Container, AppleDots, Title } from "codememe2share";

const App = () => {
  return (
    <MemeShare>
      <Container>
        <AppleDots />
          <Title variant="h3">
            😃 Hola Mundo 😃
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

⚠️ _Nota este ejemplo está usando react@18.0.0_ ⚠️

Sí, esto es realmente todo lo que necesitas para comenzar, como puedes ver en la [demostración](https://):

### Mejor demostración

Esta documentación siempre refleja la última versión más estable de CodeMeme2Share. Puedes encontrar versiones anteriores de la documentación en una [página diferente](https://)

Ahora que ya tienes una idea de lo básico, is hora de aprender más acerca de:

- ¿Cómo volver una página entera como CodeMeme2Share?
- ¿Cómo [personalizar](https://) las componentes usando [@emotion/css](https://npmjs.com/package/@emotion/css)?
