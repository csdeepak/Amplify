// 7th 
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const {getToken} = require("../utils/helpers");

// this POST route will help to register a User.
router.post("/register",async (req,res)=>{
    const {email,password,firstName,lastName,username}=req.body;

    // Does a user with this email exists.If yes we throw an error.
    const User =await User.findOne({email:email});
    if (user){
        return res.status(403).json({error:"A User with email already exists"})
    }
    // This is a valid request.
    // Create a new User in DB.
    // we donot store passwords in plain text. We convert plain text password in hash.

    const hashedPassword = bcrypt.hash(password, 10); // instead of 10 if i give a large value security increases but speed decreases but for small value security decreases speed increases.
    const newUserData={email,password: hashedPassword,firstName,lastName,username};
    const newUser = await User.create(newUserData);

    // we want to create a token to return to the user.
    const token =await getToken(email,newUser);
    // return the result tp the user.
    const userToReturn = {...newUser.toJSON(),token};
    delete userToReturn.password; // for security purpose we are not going to return hashed Password to the User, but we are going to store hashedPassword in DB.
    return res.status(200).json(userToReturn);
});

module.exports = router;