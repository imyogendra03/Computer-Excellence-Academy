const bcrypt = require("bcryptjs");

const hash = "$2b$10$TzkjKaYyXO1GkC.pJLzxquoL2whUVV2azdHZysXB/j3vwmNwX42Am";
const pass = "admin123";

const test = async () => {
    const isMatch = await bcrypt.compare(pass, hash);
    console.log("Password match:", isMatch);
};

test();
