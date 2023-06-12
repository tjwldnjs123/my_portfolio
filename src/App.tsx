import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Intro from "./pages/intro/Intro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./pages/project/Project";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/main" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
