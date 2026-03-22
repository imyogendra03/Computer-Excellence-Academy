require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

const updateAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ DB Connected");

        const hashed = await bcrypt.hash("admin123", 10);
        const result = await Admin.findOneAndUpdate(
            { email: "admin@cea.com" },
            { password: hashed },
            { upsert: true, new: true }
        );

        console.log("✅ Admin Updated/Created:", result.email);
    } catch (err) {
        console.error("❌ Failed:", err.message);
    } finally {
        process.exit();
    }
};

updateAdmin();
