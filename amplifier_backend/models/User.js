
//3
const mongoose=require("mongoose");

// How to create a model.
// 1- reuire mongoose.
// 2- create a mongoose schema.
// 3- create model.

const User = new mongoose.Schema({
    firstName: {type: String, required:true,},
    // type defines data type and required is used that this feild is must for the user to fill without this feild a user cannot exist.

    lastName: {
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    likedSongs:{
        type:String,
        default:"",
    },
    likedPlaylists:{
        type:String,
        default:"",
    },
    subscribedArtists:{
        type:String,
        default:"",
    },
});

const UserModel = mongoose.model("User",User);

module.exports = UserModel;