/* eslint-disable react/function-component-definition */
import { useEffect } from "react";

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// context
import { useLanguage } from "context/Language";

// own components
// eslint-disable-next-line no-unused-vars
import Navbar from "components/Navbar/Navbar";

// views
import Home from "views/Home/Home";
import Start from "views/Start/Start";

// styles
import "./index.css";
import MainBody from "layouts/MainBody/MainBody";

const App = () => {
  const { setLanguageState } = useLanguage();

  useEffect(() => {
    // fetching from local storage
    const lang =
      localStorage.getItem("lang") === null || localStorage.getItem("lang") === undefined
        ? "en"
        : localStorage.getItem("lang");
    if (lang !== window.navigator.language) localStorage.setItem("lang", window.navigator.language);
    setLanguageState({ type: "set", lang: lang.split("-")[0] });
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="docs" element={<Home />}>
          <Route index element={<MainBody />} />
          <Route path=":seen" element={<MainBody />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
