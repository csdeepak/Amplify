//7

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/helpers");

// This POST route will help to register a User.
router.post("/register", async (req, res) => {
    const { email, password, firstName, lastName, username } = req.body;

    // Check if a user with this email exists. If yes, we throw an error.
    const user = await User.findOne({ email: email });
    if (user) {
        return res.status(403).json({ error: "A User with this email already exists" });
    }

    // This is a valid request.
    // Create a new User in DB.
    // We don't store passwords in plain text. We convert plain text password into a hash.
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const newUserData = { email, password: hashedPassword, firstName, lastName, username };
    const newUser = await User.create(newUserData);
    console.log(newUserData);

    // We want to create a token to return to the user.
    const token = await getToken(email, newUser);

    // Return the result to the user.
    const userToReturn = {...newUser.toJSON(), token };
    console.log(userToReturn);
    delete userToReturn.password; // Do not return hashed Password for security purposes.

    return res.status(200).json(userToReturn);
});
// 9

// This POST route will help the user login.
router.post("/login", async (req, res) => {
    // Step 1: Get email and password sent by user from req.body
    const { email, password } = req.body;

    // Step 2: Check if a user with the given email exists. If not, the credentials are invalid.
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(403).json({ err: "Invalid credentials" });
    }

    // Step 3: If the user exists, check if the password is correct.
    // Since we stored the password as a hash, we can't directly compare it to the plain text password.
    // bcrypt.compare allows us to securely compare the plain password to the hash stored in the database.
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(403).json({ err: "Invalid credentials" });
    }

    // Step 4: If the credentials are correct, return a token to the user.
    const token = await getToken(user.email, user);
    const userToReturn = { ...user.toJSON(), token };
    delete userToReturn.password; // Do not return the hashed password.

    return res.status(200).json(userToReturn);
});

module.exports = router;
