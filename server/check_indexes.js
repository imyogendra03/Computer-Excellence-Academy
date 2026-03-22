require("dotenv").config();
const mongoose = require("mongoose");

const checkIndexes = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const indexes = await mongoose.connection.db.collection("admins").indexes();
        console.log("Admins Indexes:", JSON.stringify(indexes, null, 2));
    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        process.exit();
    }
};

checkIndexes();
