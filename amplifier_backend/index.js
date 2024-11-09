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

require("dotenv").config();
const app = express();
const port = 6010;
app.use(express.json()); 

//connect mongodb to our node app
//mongoose.connect() takes 2 arguments 1.db 
//2 connection options

mongoose.connect("mongodb+srv://CSDEEPAK:"+process.env.MONGO_PASSWORD+"@amplify.uvhj4.mongodb.net/?retryWrites=true&w=majority&appName=Amplify")
    .then(() => {
        console.log("Connected to Mongo!!!");
    })
    .catch((err) => {
        console.error("Error while Connection", err);
    });


//setup passport

let  opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'thisKeyIsSupposedToBeSecret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        //done(err, doesTheUserExist)
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

app.get("/",(req,res)=>{
    res.send("Hello World.");
});

app.use("/auth",authRoutes);
app.use("/create",songRoutes);

// Now I want to tell Express that my Server will run on localhost:8000
app.listen(port, () => {
    console.log("App is running on port " + port);
});


