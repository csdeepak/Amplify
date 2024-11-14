const express = require("express");
const router = express.Router();
const passport =require("passport");
const Song=require("../models/Song");
const User = require("../models/User");

// session helps in maintaining the login 


router.post("/create", passport.authenticate("jwt",{session:false}),async(req,res)=>{
    //req.user gets the user beecause of the passport.authenticate
    const {name,thumbnail,track} = req.body;
    if(!name||!thumbnail||!track){
        return res.status(301).json({err:"Insufficient details to creates song."});
    }
    const artist =req.user._id;
    const songDetails={name,thumbnail,track,artist};
    const createdSong =await Song.create(songDetails);
    return res.status(200).json(createdSong)

});

// get route to get all song that i have published
router.get("/get/mysongs",passport.authenticate("jwt",{session:false}),async(req, res)=>{
    
    const songs=await Song.find({artist: req.user._id}).populate("artist");
    return res.status(200).json({data:songs});
});

// Get route to get all songs any artist has published.
// I will send the artist id and I want to see all songs that artist has published.

// 12th Video

router.get("/get/artist/:artistId",passport.authenticate("jwt",{session:false}), async(req,res)=>
{
   const {artistId} =req.params;
   // if artist exists.
   const artist = await User.findOne({_id:artistId});
   console.log(artist);
   //![] = false
   //!null = true
   //!undefined =true
   if(!artist){
    return res.status(400).json({err:"Artist Does Not Exists"});
   }
   const songs = await Song.find({artist:artistId});
   return res.status(200).json({data:songs});
}
);

// get route to get a single song by name.

// 12th video

router.get("/get/songname/:songName",passport.authenticate("jwt",{session:false}),async(req,res) => {
    const {songName} =req.params;
    

    // song name must be exact and same then only it can fetch.
    const songs = await Song.find({name:songName});
    return res.status(200).json({data:songs});  
});

module.exports=router;