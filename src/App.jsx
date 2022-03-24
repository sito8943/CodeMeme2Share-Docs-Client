import React from "react";

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles
import "./App.scss";
import Footer from "./components/Footer/Footer";

// navbar
import Navbar from "./components/Navbar/Navbar";

// views
import GraphView from "./views/GraphView/GraphView";
import Main from "./views/Main/Main";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes path="/" element={<Navbar />}>
          <Route index element={<Main />} />
          <Route path="/graph" element={<GraphView />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
