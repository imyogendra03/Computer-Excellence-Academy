const axios = require("axios");

const testLogin = async () => {
    try {
        const res = await axios.post("https://computer-excellance-academy.onrender.com/api/admin/login", {
            email: "admin@cea.com",
            password: "admin123"
        });
        console.log("✅ LIVE Login Success:", res.data);
    } catch (err) {
        console.error("❌ LIVE Login Failed:", err.response ? err.response.data : err.message);
    }
};

testLogin();
