import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./Components/Header";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
