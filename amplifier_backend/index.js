//2
//5
// npm init : package.json  -- This is a node project.

const express = require("express"); // importing express package.
const mongoose=require("mongoose");
require("dotenv").config();
const app = express();
const port = 6010;

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

app.get("/",(req,res)=>{
    res.send("Hello World.");
});
// Now I want to tell Express that my Server will run on localhost:8000
app.listen(port, () => {
    console.log("App is running on port " + port);
});
