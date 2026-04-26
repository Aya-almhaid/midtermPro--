// controllers/auth.controller.js

export const register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        // Add your database logic here (e.g., User.create({ ... }))

        console.log("Registering:", email);
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Add your verification and JWT logic here

        res.status(200).json({ message: "Login successful", token: "your_jwt_token" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};