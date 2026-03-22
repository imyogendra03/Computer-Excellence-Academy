require("dotenv").config();
const mongoose = require("mongoose");

const test = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });
        console.log("✅ DB Connected");
    } catch (err) {
        console.error("❌ DB Connection Failed:", err.message);
    } finally {
        process.exit();
    }
};

test();
