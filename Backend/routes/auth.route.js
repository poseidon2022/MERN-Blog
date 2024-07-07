const express = require("express");
const imported = require("../controller/auth.controller.js")
const signup = imported.method
const signin = imported.otherMethod
const router = express.Router();

router.post('/signup', signup)
router.post('/signin', signin)

module.exports = router; 
