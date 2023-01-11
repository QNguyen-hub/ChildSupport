import { findByLabelText } from "@testing-library/react";
import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import background from "./images/mountain.jpg";
const navStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  padding: "20%",
};
const mainStyle = {
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
};
const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div style={navStyle}>
        <Nav />
      </div>
      <div style={mainStyle}>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
