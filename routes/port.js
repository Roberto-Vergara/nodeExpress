const { route } = require("../app");

const express = require("express"),
    router = express.Router();

router.get("/",(req,res)=>{
    res.render("index");
})
    .get("/works",(req,res)=>{
        res.render("works");
    });



module.exports=router;