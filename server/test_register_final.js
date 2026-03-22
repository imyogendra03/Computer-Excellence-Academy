const axios = require("axios");

const testRegister = async () => {
    try {
        const res = await axios.post("https://computer-excellance-academy.onrender.com/api/admin/", {
            email: "admin2@cea.com",
            password: "admin123"
        });
        console.log("✅ Register Success:", res.data);
    } catch (err) {
        console.error("❌ Register Failed:", err.response ? err.response.data : err.message);
    }
};

testRegister();
