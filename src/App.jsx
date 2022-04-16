import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then((response) => {
      setPizzas(response.data.pizzas);
      console.log(response.data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<Home pizzas={pizzas} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
