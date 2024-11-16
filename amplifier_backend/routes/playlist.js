// 13 th

const express = require("express");
const passport = require("passport");
const router = express.Router();
const Playlist = require("../models/Playlist");
const User =require("../models/User");
const Song=require("../models/Song");
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
router.get("/get/playlist/:playlistId",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    // this concept is called req.params
    const playlistId = req.params.playlistId;
    const playlist  = await Playlist.findOne({_id:playlistId}).populate({
        path:"songs",
        populate:{
            path:"artist",
        }
    });
    if(!playlist){
        return res.status(301).json({err:"Invalid Id"});
    }
    return res.status(200).json(playlist);

});


//48
//playlist created by me
router.get("/get/me",passport.authenticate("jwt",{session:false}),async(req,res)=>
    {
        const artistId = req.user._id;
        const playlists= await Playlist.find({owner:artistId}.populate("owner")); // if valid return artist playlist to the user.
        return res.status(200).json({data:playlists});
    });

//14
// i am adding /playlist/: in the above router and below router /artist/: i.e., to differentiate btw them.
 // Get all playlist made by an artist.
router.get("/get/artist/:artistId",passport.authenticate("jwt",{session:false}),async(req,res)=>
{
    const artistId = req.params.artistId;

    const artist = await User.findOne({_id:artistId});
    if(!artist){
        return res.status(304).json({err:"Invalid Artist ID"});
    }
    const playlists= await Playlist.find({owner:artistId}); // if valid return artist playlist to the user.
    return res.status(200).json({data:playlists});
});


 // Add a song to a Playlist.
router.post("/add/song",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const currentUser = req.user;
    const {playlistId,songId} = req.body;
   //step 0:  Get playlist if valid.
   const playlist= await Playlist.findOne({_id:playlistId});
   if(!playlist){
        return res.status(304).json({err:"Playlist Does Not Exists"});
   }

   //refer 16 here 
   //step 1: check if current user owns the playlist or is a collaborator
   if(!playlist.owner.equals(currentUser._id) && !playlist.collaborators.includes(currentUser._id)){
    return res.status(400).json({err:"Not Allowed"});
   }

   //step 2 : Check if the song is a valid song.
const song = await Song.findOne({_id:songId});
if(!song){
    return res.status(304).json({err:"Song Does not Exists"});
}

    // step 3: we can now add song to playlist
    playlist.songs.push(songId);
    await playlist.save(); // to save in database.
    return res.status(200).json(playlist);
});


module.exports = router;