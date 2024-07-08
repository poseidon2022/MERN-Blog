const User = require("../Models/user.model.js")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

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

const signin = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password || username === '' || password === '') {
        console.log("all fields are required")
        res.json({message:"All fields are required"})
        return
    }
    try {
        const validUser = await User.findOne({username});
        if (!validUser) {
            console.log("User not found")
            res.json()
            return
        }
        const validPwd = bcrypt.compareSync(password, validUser.password)
        if (!validPwd) {
            console.log("invalid Credentials")
            res.json()
            return
        }

        const token = jwt.sign(
            {id: validUser._id}, "kidusm"
        )
        res.status(200).cookie("token", token, {
            httpOnly: true}).json(validUser)
        console.log("Sign in successful")
    } catch(error) {
        console.log(error)
        console.log("Can not sign in now!")
    }
}
module.exports = {
    method: signup,
    otherMethod: signin
}