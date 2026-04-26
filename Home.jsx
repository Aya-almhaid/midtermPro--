import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const pages = [
        { name: "Store", path: "/home", desc: "Browse products" },
        { name: "Login", path: "/login", desc: "Access your account" },
        { name: "Register", path: "/register", desc: "Create new account" },
        { name: "User Dashboard", path: "/dashboard", desc: "Your activity" },
        { name: "Admin Panel", path: "/admin", desc: "Manage store" },
    ];

    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to Your Store 🚀</h1>
            <p className="home-subtitle">Choose where you want to go</p>

            <div className="home-grid">
                {pages.map((page, index) => (
                    <Link to={page.path} key={index} className="home-card">
                        <h2>{page.name}</h2>
                        <p>{page.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;