//4
const mongoose = require("mongoose");

const { Schema } = mongoose;
// How to create a model.
// 1- require mongoose.
// 2- create a mongoose schema.
// 3- create model.

const PlaylistSchema = new Schema({
    name: { type: String, required: true },
    thumbnail: { type: String, required: true },
    songs: [{ type: Schema.Types.ObjectId, ref: "Song" }],
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    collaborators: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }] // Allow an empty array by default
});

module.exports = mongoose.model("Playlist", PlaylistSchema);
