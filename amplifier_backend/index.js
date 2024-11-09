// npm init : package.json  -- This is a node project.

const express = require("express"); // importing express package.
const app = express();

const port = 8000;

app.get("/",(req,res)=>{
    res.send("Hello World.");
});
// Now I want to tell Express that my Server will run on localhost:8000
app.listen(port,()=>{
    console.log("App is running on port "+ port);
});
