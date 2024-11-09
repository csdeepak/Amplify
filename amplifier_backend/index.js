// npm init : package.json  -- This is a node project.

const express = require("express"); // importing express package.
const app = express();

const port = 8000;

app.get("/",(req,res)=>{
    res.send("Hello World.");
});

app.listen(port,()=>{
    console.log("App is running on port "+ port);
});
