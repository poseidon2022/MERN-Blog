const User = require("../Models/user.model.js")
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
    const {username, email,password} = req.body;
    if (!email || !username || !password || username === "" || email === "" || password === "") {
        return res.status(400).json({message: "All fields are required"})
    }

    const hashedpwd = bcrypt.hashSync(password, 10);
    const newUser = new User({
        username,
        email,
        password: hashedpwd
    });

    try {
        await newUser.save();
        res.json({message: "Signup successful"})
        console.log("Signup successful")
    }
    catch(error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = signup