const express = require("express");
const router = express.Router();
const passport =require("passport");
const Song =require("../models/Song");


router.post("/create", passport.authenticate("user"),(req,res)=>{\
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

module.exports=router;