const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000 ;
const apiData = require("./data.json");

app.use(cors());

app.get("/",(req , res)=>{
    res.send("aman kumar");
});

app.get("/service",(req , res)=>{
    res.send(apiData);
});

app.listen(port , () =>{
    console.log("aman shreya mukul rahul");
})