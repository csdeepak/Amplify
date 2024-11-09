const mongoose=reuire("mongoose");

// How to create a model.
// 1- reuire mongoose.
// 2- create a mongoose schema.
// 3- create model.

const Playlist = new mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    thumbnail :{
        type: String,
        required: true,
    },
    
    owner:{
        type: mongoose.Type.ObjectId,
        ref: "user",
    },
    //playlist songs 
    //playlist collaborators

    songs:[
        {
        type: mongoose.Type.ObjectId,
        ref :"song"//Song
        
    },
    ],
    collaborators :{
        type: mongoose.Type.ObjectId,
        ref: "user",//User
    },


    
});

const PlaylistModel = mongoose.model("Playlist",Playlist)

module.exports = PlaylistModel;