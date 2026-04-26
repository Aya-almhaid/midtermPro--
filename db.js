import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;

        // 🔍 تأكد إنه موجود
        if (!uri) {
            throw new Error("MONGO_URI is undefined. Check your .env file");
        }

        console.log("Connecting to MongoDB...");

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB Connected ✅");

    } catch (error) {
        console.error("MongoDB Error ❌:", error.message);
        process.exit(1);
    }
};

export default connectDB;