//4
const mongoose=require("mongoose");

// How to create a model.
// 1- reuire mongoose.
// 2- create a mongoose schema.
// 3- create model.

const Song = new mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    thumbnail :{
        type: String,
        required: true,
    },
    track :{
        type: String,
        required: true,
    },
    artist :{
        type: mongoose.Type.ObjectId,
        ref: "user",
    },
    
});

const SongModel = mongoose.model("Song",Song);

module.exports = SongModel;