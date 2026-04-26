import React from "react";
import { useNavigate } from "react-router-dom";

function LandingHome() {
    const navigate = useNavigate();

    const styles = {
        page: { minHeight: "100vh", position: "relative" },
        // Glassmorphism Navbar (Bright version)
        nav: {
            display: "flex",
            justifyContent: "space-between",
            padding: "1.2rem 10%",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(20px)",
            position: "sticky",
            top: 0,
            zIndex: 100,
            borderBottom: "1px solid rgba(0,0,0,0.05)"
        },
        logo: {
            fontSize: "1.5rem",
            fontWeight: "800",
            background: "linear-gradient(to right, #0071e3, #40a9ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "pointer"
        },
        // Shiny Buttons
        primaryBtn: {
            backgroundColor: "#0071e3", // Apple-style Blue
            color: "white",
            padding: "14px 32px",
            borderRadius: "30px",
            border: "none",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 10px 20px rgba(0, 113, 227, 0.2)",
            transition: "all 0.3s ease"
        },
        secondaryBtn: {
            backgroundColor: "white",
            color: "#1d1d1f",
            padding: "14px 32px",
            borderRadius: "30px",
            border: "1px solid #d2d2d7",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease"
        },
        hero: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "120px 20px",
        },
        title: {
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: "800",
            lineHeight: "1.05",
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
            color: "#1d1d1f"
        },
        subtitle: {
            fontSize: "1.5rem",
            color: "#86868b",
            maxWidth: "700px",
            marginBottom: "3rem"
        },
        // Animated background "shine"
        shineBlob: {
            position: "absolute",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(0,113,227,0.05) 0%, rgba(255,255,255,0) 70%)",
            top: "-100px",
            right: "-100px",
            zIndex: -1
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.shineBlob} />

            <nav style={styles.nav}>
                <h2 style={styles.logo} onClick={() => navigate("/")}>🛍️ MyStore</h2>
                <div style={{ display: "flex", gap: "15px" }}>
                    <button style={styles.secondaryBtn} onClick={() => navigate("/login")}>Login</button>
                    <button
                        style={{ ...styles.primaryBtn, padding: "10px 24px", fontSize: "0.9rem" }}
                        onClick={() => navigate("/register")}
                    >
                        Sign Up
                    </button>
                </div>
            </nav>

            <section style={styles.hero} className="animate-view">
                <h1 style={styles.title}>
                    Shopping, <br />
                    <span style={{ color: "#0071e3" }}>Elevated.</span>
                </h1>
                <p style={styles.subtitle}>
                    Discover the world's most curated products in one seamless experience.
                </p>
                <div style={{ display: "flex", gap: "20px" }}>
                    <button
                        style={styles.primaryBtn}
                        onClick={() => navigate("/login")}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 113, 227, 0.4)";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 113, 227, 0.2)";
                        }}
                    >
                        Start Shopping
                    </button>
                    <button style={styles.secondaryBtn} onClick={() => navigate("/register")}>
                        View Gallery
                    </button>
                </div>
            </section>
        </div>
    );
}

export default LandingHome;