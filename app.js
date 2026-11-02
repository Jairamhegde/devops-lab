const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("This is the default node route");
});

app.get("/api",(req,res)=>{
    res.send("Thi is second api route");
});

app.get("/index",(req,res)=>{
    res.send("This is index route");
});

app.listen(port,"0.0.0.0",()=>{
    console.log("server is live");

});



