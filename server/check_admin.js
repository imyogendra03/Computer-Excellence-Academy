require("dotenv").config();
const mongoose = require("mongoose");
const Admin = require("./models/Admin");

const checkAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const admin = await Admin.findOne({ email: "admin@cea.com" });
        if (admin) {
            console.log("✅ Admin found in DB:", JSON.stringify(admin, null, 2));
        } else {
            console.log("❌ Admin NOT found in DB");
        }
    } catch (err) {
        console.error("❌ DB Error:", err.message);
    } finally {
        process.exit();
    }
};

checkAdmin();
