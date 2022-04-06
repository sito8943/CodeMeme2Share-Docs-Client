/* eslint-disable react/function-component-definition */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-undef */
import { useEffect } from "react";

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layouts
import Navbar from "layouts/Navbar/Navbar";

// views
import Home from "views/Home/Home";
import Start from "views/Start/Start";

const App = () => {
  useEffect(() => {
    console.log(window.navigator.language);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Start />} />
          <Route path="/docs" element={<Home />}>
            {/*
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
          */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
