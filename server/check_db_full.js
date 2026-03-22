require("dotenv").config();
const mongoose = require("mongoose");

const checkCollections = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log("Collections:", collections.map(c => c.name));
        
        const admins = await mongoose.connection.db.collection("admins").find({}).toArray();
        console.log("Admins count:", admins.length);
        console.log("Admin details:", JSON.stringify(admins, null, 2));
    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        process.exit();
    }
};

checkCollections();
