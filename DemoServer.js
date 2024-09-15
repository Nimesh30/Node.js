const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    return res.send("<h1>hello from homepage...." + req.query.name + "</h1>");
})

app.listen(8000,()=>{console.log("server Started...")})