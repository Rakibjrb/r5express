import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./ROUTERPAGES/Index";
import "./App.css";
import "./App.responsive.css";

//header and footer compopnents
import Navbar from "./COMPONENTS/Navbar/Navbar";
import Footer from "./COMPONENTS/Footer/Footer";
import Register from "./ROUTERPAGES/Register";
import Login from "./ROUTERPAGES/Login";
import Contact from "./ROUTERPAGES/Contact";
import User from "./ROUTERPAGES/User";
import Cart from "./ROUTERPAGES/Cart";
import ProtectedRouter from "./ROUTERPAGES/ProtectedRouter";
import Error404 from "./ROUTERPAGES/Error404";
import Shop from "./ROUTERPAGES/Shop";

const App = () => {
  const [success, setSuccess] = useState("");

  const loginSuccess = (message) => {
    setSuccess(message);
  };

  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Register" element={<Register />} />
          <Route
            path="/Login"
            element={<Login loginSuccess={loginSuccess} />}
          />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/User"
            element={
              <ProtectedRouter login={success}>
                <User />
              </ProtectedRouter>
            }
          />
          <Route
            path="/Cart"
            element={
              <ProtectedRouter login={success}>
                <Cart />
              </ProtectedRouter>
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
