import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainPage from "./pages/MainPage";
import Card from "./pages/Card";
import Checkout from "./pages/Checkout";
//--------------------------------------------------

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/card/checkout" element={<Checkout/>}></Route>
        <Route path="/card" element={<Card/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
