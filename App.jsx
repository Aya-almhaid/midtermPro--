import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingHome from "./components/Home/LandingHome";
import Register from "./components/Auth/Register.jsx";
import Login from "./components/Auth/Login.jsx";
import UserDashboard1 from "./components/pages/UserDashboard1.jsx";
import Home from "./components/Home/Home.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx"; // ✅ FIXED
import product from "./components/product/product-Card.jsx" ;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingHome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<LandingHome />} />
        <Route path="/dashboard" element={<UserDashboard1 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/product" element={<product />} />
      </Routes>
    </Router>
  );
}

export default App;