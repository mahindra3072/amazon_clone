import React from "react";
import Header from "./Header";
import Home from "./Home";
import "./App.css";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={[<Home />]} />
          <Route path="/checkout" element={[<Checkout />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
