import React from "react";
import { Link } from "react-router-dom";

function Nav({ toggleTheme, dark }) {

  return (
<>

        <Link style={{ color: dark ? "white" : "#111", textDecoration: "none" }} to="/">Home</Link>
        <Link style={{ color: dark ? "white" : "#111", textDecoration: "none" }} to="/user">User Dashboard</Link>
        <Link style={{ color: dark ? "white" : "#111", textDecoration: "none" }} to="/admin">Admin Dashboard</Link>
        <Link style={{ color: dark ? "white" : "#111", textDecoration: "none" }} to="/products">Products</Link>
      

     
    
    </>
  );
}

export default Nav;
