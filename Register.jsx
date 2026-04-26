import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";
import "/src/App.css";
const Register = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        // Basic Validation
        if (formData.password !== formData.confirmPassword) {
            return setError("Passwords do not match");
        }

        setLoading(true);

        try {
            // THE FIX: The URL must match your server.js prefix + router path
            const response = await axios.post("http://localhost:5000/api/auth/register", {
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password
            });

            if (response.status === 201) {
                console.log("Success:", response.data.message);
                navigate("/login"); // Redirect user after successful registration
            }
        } catch (err) {
            // Enhanced Error Handling
            const errorMessage = err.response?.data?.message || "Registration failed. Try again.";
            setError(errorMessage);
            console.error("Registration Error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className="register-form">
                <h2>Create Account</h2>
                <p>Join our community today</p>

                {error && <div className="error-alert">{error}</div>}

                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <div className="password-fields">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? "Registering..." : "Register Now"}
                </button>

                <p>
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;