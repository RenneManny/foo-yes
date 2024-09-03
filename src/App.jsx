import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Order from "./Pages/Orders/Order";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      {login ? <Login showLogin={setLogin} /> : <></>}
      <div className="app">
        <Navbar setLogin={setLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
