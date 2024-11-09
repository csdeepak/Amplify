const express = require("express");
const router = express.Router();
const passport =require("passport");
const Song=require("../models/Song");


// session helps in maintaining the login 


router.post("/create", passport.authenticate("jwt",{session:false}),async(req,res)=>{
    //req.user gets the user beecause of the passport.authenticate
    const{name,thumbnail,track}=req.body;
    if(!name||!thumbnail||!track){
        return res
            .status(301)
            .json({err:"Insufficient details to creates song."});
    }
    const artist =req.user._id;
    const songDetails={name,thumbnail,track,artist};
    const createdSong =await SongModel.create(songDetails);
    return res.status(200).json(createdSong)

});

// get route to get all song that i ahve published
router.get("/get/mysongs",passport.authenticate("jwt",{session:false}),async(req, res)=>{
    const currentUser=req.user;
    const songs=await Song.find({artist:req.user._id});
    return res.status(200).json({data:songs});
});

module.exports=router;