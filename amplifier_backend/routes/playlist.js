// 13 th

const express = require("express");
const passport = require("passport");
const router = express.Router();
const Playlist = require("../models/Playlist");
// Route 1 : create Playlist.

router.post("/create",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const currentUser = req.user;
    const {name, thumbnail, songs} = req.body;
if(!name||!thumbnail||!songs){
    return res.status(301).json({err:"Insufficient Data"});
};

    const playlistData = {
        name,
        thumbnail,
        songs,
        owner:currentUser._id,
        collaborators:[],
    };

    const playlist = await Playlist.create(playlistData);
    return res.status(200).json(playlist);
}
);

// Route 2 : Get playlist by ID.
// we will get the playlist ID as a route parameter and we will return the playlist having that ID.
//  /something1/something2/something3 --> exact match.
// // If we are doing /playlist/get/:playlistId (focus on the :) - this mean that playlistId is now a variable to which we can assign any value
router.get("/get/:playlistId",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    // this concept is called req.params
    const playlistId = req.params.playlistId;
    const playlist  = await Playlist.findOne({_id:playlistId});
    if(!playlist){
        return res.status(301).json({err:"Invalid Id"});
    }
    return res.status(200).json(playlist);

});


module.exports = router;