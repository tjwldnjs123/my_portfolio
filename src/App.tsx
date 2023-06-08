import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Intro from "./pages/intro/Intro";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
