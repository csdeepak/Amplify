//2
//5
//6
// npm init : package.json  -- This is a node project.

const express = require("express"); // importing express package.
const mongoose=require("mongoose");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport=require("passport");
const User = require("./models/User");

const authRoutes=require("./routes/auth");
const songRoutes=require("./routes/song");
const playlistRoutes = require("./routes/playlist");

require("dotenv").config();
const cors =require("cors");
const app = express();
const port = 6010;
app.use(cors());
app.use(express.json()); 

//connect mongodb to our node app
//mongoose.connect() takes 2 arguments 1.db 
//2 connection options

mongoose.connect("mongodb+srv://CSDEEPAK:"+process.env.MONGO_PASSWORD+"@amplify.uvhj4.mongodb.net/?retryWrites=true&w=majority&appName=Amplify")
    .then(() => {
        console.log("---Connected to Mongo Successfully---");
    })
    .catch((err) => {
        console.error("Error while Connection", err);
    });


//setup passport

let  opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'thisKeyIsSupposedToBeSecret';
passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        const user = await User.findOne({ _id: jwt_payload.identifier });
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (err) {
        return done(err, false);
    }
}));


app.get("/",(req,res)=>{
    res.send("Hello World.");
});

app.use("/auth",authRoutes);
app.use("/song",songRoutes);
app.use("/playlist",playlistRoutes);

// Now I want to tell Express that my Server will run on localhost:8000
app.listen(port, () => {
    console.log("App is running on port " + port);
});
