import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./components/Top";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <routes>
        <route path="/" element={<Home />}>
          <Nav />
        </route>
      </routes>
      <routes>
        <Main />
      </routes>
    </BrowserRouter>
  );
}

export default App;
