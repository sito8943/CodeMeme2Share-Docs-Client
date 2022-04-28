## Loading

Component that occupies the full screen that represents that the page is loading. It is composed of a [Container](/docs/2).

### Example

```
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

// react-lottie
//! if you are going to use a lottie animation
//! remember to add react-lottie (yarn add or npm install)
import Lottie from "react-lottie";

// codememe2share components
import { Loading, Container } from "codememe2share";

// images
//! import your animation here
//! can be an image or a lottie (if you are using react-lottie)
import lottie from "assets/images/loading.json";

const LoadingScreen = () => {
  return (
    <Loading
      style={{
        background: "#222333",
      }}
    >
      <Container style={{ width: 200, background: "none", backdropFilter: "none" }}>
        <Lottie options={{ animationData: lottie }} />
      </Container>
    </Loading>
  );
};

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <StrictMode>
    <LoadingScreen />
  </StrictMode>
);

```

⚠️ _Note this examples is using react@18.0.0_ ⚠️

[<Loading /> in action](https://sito-server-docs.herokuapp.com/loading)

### Props

#### Normal

| Name          | Type                    | Default | Description                      |
| ------------- | ----------------------- | ------- | -------------------------------- |
| className     | string                  |         | css class                        |
| id            | string                  |         | css id                           |
| name          | string                  |         | just a name                      |
| style         | Array<string \| number> |         | css style                        |
| ignoreDefault | bool                    | false   | whether to ignore default styles |

#### Options for styling CodeMeme2Share

_Note: If you don't want to use the CodeMeme2Share style, simply set the `ignoreDefault` property to `true`, so it will adopt your own styles or your css classes_

| Name           | Type             | Default          | Description                                                             |
| -------------- | ---------------- | ---------------- | ----------------------------------------------------------------------- |
| width          | string \| number | "100%"           | loading screen width                                                    |
| height         | string \| number | "100%"           | loading screen height                                                   |
| position       | string           | "fixed"          | loading screen position                                                 |
| justifyContent | string           | "center"         | loading screen elements justifications                                  |
| alignItems     | string           | "center"         | loading screen elements justifications                                  |
| zIndex         | number           | 99               | loading screen z index position                                         |
| transition     | string           | "200ms all ease" | loading screen container transition effect                              |
| display        | string           | "flex"           | loading screen container display                                        |
| flexDirection  | string           | "column"         | loading screen container flexbox direction                              |
| background     | string           | "#2223338c"      | loading screen container background color                               |
| padding        | string \| number | "1rem "          | padding between elements and the border of the loading screen container |
| backdropFilter | string           | "blur(4px)"      | effect for items behind loading screen                                  |
| borderRadius   | string \| number | "1rem"           | loading screen container border radius                                  |
| animation      | string           |                  | loading screen container animation                                      |
